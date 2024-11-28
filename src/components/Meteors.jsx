import React, { useRef, useEffect } from 'react'

export const Meteors = ({
  meteorColor = '#FFFFFF',
  meteorCount = 20,
}) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const meteors = []

    for (let i = 0; i < meteorCount; i++) {
      meteors.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 80 + 20,
        speed: Math.random() * 2 + 1,
        opacity: Math.random()
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      meteors.forEach((meteor) => {
        ctx.strokeStyle = meteorColor
        ctx.lineWidth = 2
        ctx.globalAlpha = meteor.opacity
        ctx.beginPath()
        ctx.moveTo(meteor.x, meteor.y)
        ctx.lineTo(meteor.x + meteor.length, meteor.y + meteor.length)
        ctx.stroke()

        meteor.x += meteor.speed
        meteor.y += meteor.speed

        if (meteor.x > canvas.width && meteor.y > canvas.height) {
          meteor.x = Math.random() * canvas.width - canvas.width
          meteor.y = Math.random() * canvas.height - canvas.height
          meteor.opacity = Math.random()
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [meteorColor, meteorCount])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}