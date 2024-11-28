import React, { useRef, useEffect } from 'react'

export const Sparkles = ({
  particleColor = '#FFFFFF',
  particleCount = 200,
  minSize = 1,
  maxSize = 3,
}) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (maxSize - minSize) + minSize,
        speed: Math.random() * 0.2 + 0.1,
        opacity: Math.random()
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((particle) => {
        ctx.fillStyle = particleColor
        ctx.globalAlpha = particle.opacity
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        particle.y -= particle.speed
        particle.opacity += Math.random() * 0.02 - 0.01
        if (particle.opacity < 0) particle.opacity = 0
        if (particle.opacity > 1) particle.opacity = 1

        if (particle.y + particle.size < 0) {
          particle.y = canvas.height + particle.size
          particle.x = Math.random() * canvas.width
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
  }, [particleColor, particleCount, minSize, maxSize])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}