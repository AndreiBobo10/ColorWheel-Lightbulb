{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const colorWheel = document.getElementById('colorWheel');\
const indicator = document.getElementById('indicator');\
const lightbulb = document.getElementById('lightbulb');\
\
colorWheel.addEventListener('mousemove', (event) => \{\
    const rect = colorWheel.getBoundingClientRect();\
    const x = event.clientX - rect.left;\
    const y = event.clientY - rect.top;\
\
    const centerX = rect.width / 2;\
    const centerY = rect.height / 2;\
\
    const dx = x - centerX;\
    const dy = y - centerY;\
\
    const distance = Math.sqrt(dx * dx + dy * dy);\
    const maxDistance = centerX;\
\
    if (distance > maxDistance) return;\
\
    const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;\
    const hue = (angle + 360) % 360;\
\
    const color = `hsl($\{hue\}, 100%, 50%)`;\
\
    indicator.style.left = `$\{x\}px`;\
    indicator.style.top = `$\{y\}px`;\
\
    lightbulb.style.backgroundColor = color;\
    lightbulb.style.boxShadow = `0 0 20px 5px $\{color\}`;\
\});\
}