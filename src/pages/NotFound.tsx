<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found - Momta</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tsparticles/confetti@2.0.3/index.min.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Poppins', sans-serif;
            min-height: 100vh;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #e2e8f0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-x: hidden;
            position: relative;
        }
        
        .particle {
            position: absolute;
            border-radius: 50%;
            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
            opacity: 0.4;
            z-index: 0;
        }
        
        .container {
            width: 100%;
            max-width: 480px;
            padding: 20px;
            z-index: 10;
        }
        
        .glass-card {
            background: rgba(30, 41, 59, 0.6);
            backdrop-filter: blur(12px);
            border-radius: 24px;
            padding: 40px 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .logo-icon {
            width: 36px;
            height: 36px;
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 12px;
            color: white;
        }
        
        .logo-text {
            font-size: 24px;
            font-weight: 700;
            background: linear-gradient(to right, #60a5fa, #a78bfa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .error-code {
            font-size: 120px;
            font-weight: 800;
            background: linear-gradient(to right, #60a5fa, #a78bfa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1;
            margin: 20px 0;
            position: relative;
            display: inline-block;
        }
        
        .error-code::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 10px;
            bottom: 15px;
            left: 0;
            background: linear-gradient(to right, rgba(96, 165, 250, 0.4), rgba(167, 139, 250, 0.4));
            border-radius: 50%;
            filter: blur(5px);
            z-index: -1;
        }
        
        h1 {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 12px;
            color: #f1f5f9;
        }
        
        p {
            color: #94a3b8;
            margin-bottom: 24px;
            line-height: 1.6;
        }
        
        .path-display {
            background: rgba(15, 23, 42, 0.5);
            border-radius: 12px;
            padding: 12px;
            margin: 20px 0;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .path-display p {
            font-size: 12px;
            margin-bottom: 5px;
            color: #64748b;
        }
        
        .path-display code {
            color: #93c5fd;
            font-family: monospace;
            word-break: break-all;
        }
        
        .buttons {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin: 30px 0;
        }
        
        .btn {
            padding: 14px 20px;
            border-radius: 12px;
            font-weight: 500;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            border: none;
            font-family: 'Poppins', sans-serif;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white;
        }
        
        .btn-secondary {
            background: transparent;
            color: #94a3b8;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }
        
        .btn-secondary:hover {
            box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
        }
        
        .help-text {
            font-size: 12px;
            color: #64748b;
            line-height: 1.6;
        }
        
        .quote {
            margin: 20px 0;
            padding: 16px;
            border-radius: 12px;
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .quote p {
            color: #e2e8f0;
            font-style: italic;
            margin: 0;
        }
        
        .floating-elements {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
        }
        
        .floating-element {
            position: absolute;
            border-radius: 50%;
            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
            opacity: 0.3;
            filter: blur(2px);
        }
        
        .astronaut {
            position: absolute;
            top: 50%;
            right: -50px;
            font-size: 40px;
            animation: float 15s infinite ease-in-out;
        }
        
        @keyframes float {
            0%, 100% {
                transform: translateY(0) rotate(0deg);
            }
            25% {
                transform: translateY(-30px) rotate(5deg);
            }
            50% {
                transform: translateY(0) rotate(0deg);
            }
            75% {
                transform: translateY(30px) rotate(-5deg);
            }
        }
        
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
                opacity: 0.6;
            }
            50% {
                transform: scale(1.1);
                opacity: 0.8;
            }
        }
        
        @keyframes glow {
            0%, 100% {
                box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
            }
            50% {
                box-shadow: 0 0 40px rgba(139, 92, 246, 0.6);
            }
        }
        
        .pulse {
            animation: pulse 4s infinite ease-in-out;
        }
        
        .glow {
            animation: glow 5s infinite ease-in-out;
        }
        
        @media (max-width: 600px) {
            .error-code {
                font-size: 100px;
            }
            
            h1 {
                font-size: 24px;
            }
            
            .glass-card {
                padding: 30px 20px;
            }
        }
    </style>
</head>
<body>
    <!-- Animated background particles -->
    <div class="floating-elements" id="floatingElements"></div>
    
    <div class="container">
        <div class="glass-card glow">
            <div class="logo">
                <div class="logo-icon">
                    <i data-feather="rocket"></i>
                </div>
                <div class="logo-text">Momta</div>
            </div>
            
            <div class="error-code pulse">404</div>
            
            <h1>Page Not Found</h1>
            
            <p>The future you're looking for doesn't exist yet. But don't worry, we're building it.</p>
            
            <div class="quote">
                <p>"Innovation is seeing what everybody has seen and thinking what nobody has thought." - Momta</p>
            </div>
            
            <div class="path-display">
                <p>Requested path:</p>
                <code id="pathname">/non-existent-page</code>
            </div>
            
            <div class="buttons">
                <button class="btn btn-primary" onclick="goHome()">
                    <i data-feather="home"></i>
                    Return to Momta
                </button>
                <button class="btn btn-secondary" onclick="goBack()">
                    <i data-feather="arrow-left"></i>
                    Go Back
                </button>
            </div>
            
            <div class="help-text">
                <p>Lost in space? Contact us at support@momta.org</p>
                <p>The future is still being written. Join us in creating it.</p>
            </div>
        </div>
    </div>
    
    <div class="astronaut">👨‍🚀</div>
    
    <script>
        // Initialize feather icons
        feather.replace();
        
        // Set current path
        document.getElementById('pathname').textContent = window.location.pathname;
        
        // Create floating elements
        const floatingElements = document.getElementById('floatingElements');
        for (let i = 0; i < 20; i++) {
            const element = document.createElement('div');
            element.classList.add('floating-element');
            
            const size = Math.random() * 30 + 10;
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            
            element.style.left = `${Math.random() * 100}%`;
            element.style.top = `${Math.random() * 100}%`;
            
            // Animation
            element.style.animation = `
                float ${Math.random() * 20 + 10}s infinite ease-in-out,
                pulse ${Math.random() * 5 + 3}s infinite ease-in-out
            `;
            element.style.animationDelay = `${Math.random() * 5}s`;
            
            floatingElements.appendChild(element);
        }
        
        // Create background particles
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 100 + 50;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            particle.style.animation = `pulse ${Math.random() * 10 + 5}s infinite ease-in-out`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            document.body.appendChild(particle);
        }
        
        // Navigation functions
        function goHome() {
            // Confetti effect
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            
            // Navigate home after a short delay
            setTimeout(() => {
                window.location.href = 'https://momta.org';
            }, 800);
        }
        
        function goBack() {
            window.history.back();
        }
        
        // Add interactive effect to the 404 number
        const errorCode = document.querySelector('.error-code');
        errorCode.addEventListener('mouseover', () => {
            errorCode.style.transform = 'scale(1.05)';
        });
        
        errorCode.addEventListener('mouseout', () => {
            errorCode.style.transform = 'scale(1)';
        });
    </script>
</body>
</html>
