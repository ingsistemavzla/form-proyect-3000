<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ingeniería con Propósito · 30 Sitios de Élite | Gabriel Delgado</title>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Lordicon -->
    <script src="https://cdn.lordicon.com/lordicon.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Open Sans', sans-serif;
            background: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            position: relative;
        }

        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 20% 80%, rgba(25, 118, 210, 0.03) 0%, rgba(255,255,255,0) 70%);
            pointer-events: none;
        }

        /* Tarjeta principal */
        .form-card {
            max-width: 680px;
            width: 100%;
            background: white;
            border-radius: 28px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            position: relative;
            z-index: 1;
            animation: fadeInUp 0.6s ease-out;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Cabecera */
        .form-header {
            background: linear-gradient(135deg, #0d47a1, #1565c0);
            padding: 2rem 2rem 1.8rem;
            text-align: center;
            color: white;
            position: relative;
        }

        .header-icon {
            margin-bottom: 1rem;
        }

        .form-header h1 {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.6rem;
            font-weight: 900;
            margin-bottom: 0.5rem;
            letter-spacing: -0.5px;
        }

        .form-header h1 span {
            background: linear-gradient(135deg, #bae6fd, #93c5fd, #60a5fa);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }

        .form-header p {
            font-size: 0.9rem;
            opacity: 0.9;
            font-weight: 500;
        }

        .availability-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(255,255,255,0.15);
            backdrop-filter: blur(8px);
            padding: 0.5rem 1.2rem;
            border-radius: 100px;
            margin-top: 0.8rem;
            font-size: 0.8rem;
            font-weight: 600;
        }

        /* Caja de propósito */
        .purpose-box {
            background: #e3f2fd;
            border-left: 5px solid #1976d2;
            padding: 1rem 1.2rem;
            margin: 1.5rem 2rem 0;
            border-radius: 0 12px 12px 0;
            font-size: 0.85rem;
            font-weight: 500;
            color: #1e293b;
            display: flex;
            align-items: flex-start;
            gap: 0.8rem;
        }

        .purpose-box lord-icon {
            flex-shrink: 0;
        }

        .purpose-box strong {
            color: #1565c0;
        }

        /* Stats */
        .stats-row {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            margin: 1.5rem 2rem 0;
        }

        .stat-card {
            flex: 1;
            background: #f8fafc;
            border-radius: 16px;
            padding: 0.8rem;
            text-align: center;
            border: 1px solid #eef2f6;
        }

        .stat-number {
            font-size: 1.5rem;
            font-weight: 800;
            font-family: 'Montserrat', sans-serif;
            color: #0d47a1;
        }

        .stat-label {
            font-size: 0.65rem;
            font-weight: 600;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        /* Formulario */
        .form-body {
            padding: 2rem;
            background: white;
        }

        .section-title {
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
            font-weight: 700;
            color: #0d47a1;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
            position: relative;
        }

        .form-label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 600;
            font-size: 0.85rem;
            color: #334155;
            margin-bottom: 0.5rem;
        }

        .form-label .optional {
            font-weight: 400;
            font-size: 0.7rem;
            color: #94a3b8;
        }

        .input-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            transition: all 0.2s ease;
        }

        .input-icon {
            position: absolute;
            left: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
            pointer-events: none;
        }

        .form-input, .form-textarea {
            width: 100%;
            padding: 0.9rem 1rem 0.9rem 3.2rem;
            font-size: 0.95rem;
            font-family: 'Open Sans', sans-serif;
            border: 2px solid #e2e8f0;
            border-radius: 16px;
            background: white;
            transition: all 0.25s ease;
            outline: none;
        }

        .form-textarea {
            padding: 0.9rem 1rem;
            resize: vertical;
            min-height: 80px;
        }

        .form-input:focus, .form-textarea:focus {
            border-color: #1976d2;
            box-shadow: 0 0 0 4px rgba(25, 118, 210, 0.1);
        }

        .form-input.error, .form-textarea.error {
            border-color: #1976d2;
            background: #f0f9ff;
        }

        .form-input.success {
            border-color: #1565c0;
            background: #e3f2fd;
        }

        .validation-message {
            font-size: 0.75rem;
            margin-top: 0.4rem;
            margin-left: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.3rem;
            color: #1565c0;
        }

        /* Radio group */
        .radio-group {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;
            margin-top: 0.5rem;
        }

        .radio-option {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            background: #f1f5f9;
            padding: 0.7rem 1.2rem;
            border-radius: 100px;
            cursor: pointer;
            transition: all 0.2s ease;
            border: 2px solid transparent;
            flex: 1;
            min-width: 140px;
        }

        .radio-option:hover {
            background: #e2e8f0;
            transform: translateY(-2px);
        }

        .radio-option.selected {
            background: #1976d2;
            border-color: #0d47a1;
            color: white;
        }

        .radio-option.selected .radio-text {
            color: white;
        }

        .radio-option input {
            display: none;
        }

        .radio-text {
            font-size: 0.85rem;
            font-weight: 500;
            color: #1e293b;
        }

        /* Keywords */
        .selector-label {
            font-weight: 700;
            margin-bottom: 0.8rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #1e293b;
            font-size: 0.9rem;
        }

        .keywords-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 0.7rem;
            margin-bottom: 0.5rem;
        }

        .keyword-option {
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            background: #f1f5f9;
            padding: 0.6rem 1.2rem;
            border-radius: 100px;
            cursor: pointer;
            transition: all 0.2s ease;
            border: 2px solid transparent;
            font-weight: 600;
            font-size: 0.85rem;
            color: #1e293b;
        }

        .keyword-option:hover {
            background: #e2e8f0;
            transform: translateY(-2px);
        }

        .keyword-option.selected {
            background: #1976d2;
            border-color: #0d47a1;
            color: white;
        }

        .keyword-option.selected lord-icon {
            filter: brightness(0) invert(1);
        }

        /* Visual options */
        .visual-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 0.7rem;
            margin-top: 0.5rem;
        }

        .visual-option {
            flex: 1;
            text-align: center;
            background: #f1f5f9;
            padding: 0.8rem;
            border-radius: 16px;
            cursor: pointer;
            transition: all 0.2s ease;
            border: 2px solid transparent;
        }

        .visual-option:hover {
            background: #e2e8f0;
            transform: translateY(-2px);
        }

        .visual-option.selected {
            background: #1976d2;
            border-color: #0d47a1;
            color: white;
        }

        .visual-option.selected .visual-text {
            color: white;
        }

        .visual-text {
            font-size: 0.8rem;
            font-weight: 600;
            margin-top: 0.3rem;
            display: block;
            color: #1e293b;
        }

        /* Barra de progreso */
        .progress-section {
            margin: 1.5rem 0 1.8rem;
        }

        .progress-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.6rem;
            font-size: 0.8rem;
            font-weight: 600;
            color: #475569;
        }

        .progress-bar-bg {
            background: #e2e8f0;
            border-radius: 40px;
            height: 8px;
            overflow: hidden;
        }

        .progress-fill {
            background: linear-gradient(90deg, #1976d2, #0d47a1);
            width: 0%;
            height: 100%;
            border-radius: 40px;
            transition: width 0.4s ease;
        }

        .info-note {
            font-size: 0.7rem;
            color: #64748b;
            margin-top: 0.3rem;
            display: flex;
            align-items: center;
            gap: 0.3rem;
        }

        /* Botón */
        .submit-btn {
            width: 100%;
            background: linear-gradient(135deg, #1976d2, #0d47a1);
            border: none;
            padding: 1rem;
            border-radius: 50px;
            color: white;
            font-weight: 800;
            font-size: 1rem;
            font-family: 'Montserrat', sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.8rem;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 0.5rem;
            box-shadow: 0 8px 20px rgba(25, 118, 210, 0.25);
        }

        .submit-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 28px rgba(25, 118, 210, 0.35);
        }

        .submit-btn:active {
            transform: translateY(1px);
        }

        .submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
        }

        .delivery-note {
            background: #f8fafc;
            border-radius: 12px;
            padding: 0.8rem;
            text-align: center;
            margin-top: 1rem;
            font-size: 0.75rem;
            font-weight: 600;
            color: #0d47a1;
        }

        /* PANTALLA DE CONFIRMACIÓN */
        .confirmation-screen {
            padding: 2rem;
            background: white;
        }

        .success-icon {
            text-align: center;
            margin-bottom: 1.5rem;
        }

        .confirmation-title {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.5rem;
            font-weight: 800;
            color: #0d47a1;
            text-align: center;
            margin-bottom: 0.5rem;
        }

        .confirmation-subtitle {
            text-align: center;
            color: #64748b;
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
        }

        .resumen-card {
            background: #f8fafc;
            border-radius: 20px;
            padding: 1.2rem;
            margin-bottom: 1.5rem;
            border: 1px solid #e2e8f0;
        }

        .resumen-title {
            font-weight: 800;
            font-size: 0.8rem;
            text-transform: uppercase;
            color: #64748b;
            margin-bottom: 0.8rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .resumen-item {
            display: flex;
            justify-content: space-between;
            padding: 0.6rem 0;
            border-bottom: 1px dashed #e2e8f0;
            font-size: 0.9rem;
        }

        .resumen-item:last-child {
            border-bottom: none;
        }

        .resumen-label {
            font-weight: 600;
            color: #334155;
        }

        .resumen-value {
            color: #0d47a1;
            font-weight: 500;
        }

        /* Instrucciones de pago */
        .payment-section {
            background: linear-gradient(135deg, #e3f2fd, #f0f9ff);
            border-radius: 20px;
            padding: 1.2rem;
            margin-bottom: 1.5rem;
            border: 1px solid #bbdefb;
        }

        .payment-title {
            font-weight: 800;
            font-size: 1rem;
            color: #0d47a1;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .payment-method {
            background: white;
            border-radius: 14px;
            padding: 1rem;
            margin-bottom: 0.8rem;
        }

        .method-name {
            font-weight: 800;
            font-size: 0.9rem;
            color: #0d47a1;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .method-details {
            font-size: 0.85rem;
            color: #334155;
            word-break: break-all;
        }

        .method-details strong {
            color: #0d47a1;
        }

        .whatsapp-button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.8rem;
            background: linear-gradient(135deg, #25D366, #128C7E);
            color: white;
            text-decoration: none;
            padding: 1rem;
            border-radius: 50px;
            font-weight: 700;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            margin-bottom: 1rem;
            border: none;
            cursor: pointer;
            width: 100%;
        }

        .whatsapp-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
        }

        .note-text {
            font-size: 0.7rem;
            color: #64748b;
            text-align: center;
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid #e2e8f0;
        }

        .back-link {
            text-align: center;
            margin-top: 1rem;
        }

        .back-link a {
            color: #1976d2;
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 600;
        }

        @media (max-width: 600px) {
            body {
                padding: 1rem;
            }
            .form-body, .confirmation-screen {
                padding: 1.5rem;
            }
            .purpose-box, .stats-row {
                margin-left: 1rem;
                margin-right: 1rem;
            }
            .stats-row {
                flex-direction: column;
            }
            .form-header h1 {
                font-size: 1.3rem;
            }
            .radio-group, .visual-grid {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>

<div id="app">
    <!-- FORMULARIO -->
    <div id="formContainer" class="form-card">
        <div class="form-header">
            <div class="header-icon">
                <lord-icon
                    src="https://cdn.lordicon.com/hqymfzvj.json"
                    trigger="loop"
                    colors="primary:#ffffff,secondary:#7dd3fc"
                    style="width:70px;height:70px">
                </lord-icon>
            </div>
            <h1>Ingeniería con <span>Propósito</span></h1>
            <p>30 Sitios de Élite · Una iniciativa de Gabriel Delgado para una causa familiar</p>
            <div class="availability-badge">
                <lord-icon src="https://cdn.lordicon.com/lupbrghs.json" trigger="loop" colors="primary:#7dd3fc" style="width:18px;height:18px"></lord-icon>
                <span>Ingeniería al alcance de tu mano</span>
            </div>
        </div>

        <div class="purpose-box">
            <lord-icon src="https://cdn.lordicon.com/yaogxvnw.json" trigger="loop" colors="primary:#1976d2" style="width:36px;height:36px"></lord-icon>
            <div>
                <strong>Iniciativa:</strong> parte de los ingresos se destina a una intervención médica prioritaria para mi abuela; cada encargo contribuye a esa atención.<br>
                <strong style="margin-top: 6px; display: inline-block;">Hasta treinta plazas, con el mismo cuidado técnico para quien delega su presencia en la web.</strong>
            </div>
        </div>

        <div class="stats-row">
            <div class="stat-card">
                <div class="stat-number">2<span style="font-size: 0.9rem;">/30</span></div>
                <div class="stat-label">PROYECTOS ACTIVOS</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">⚡</div>
                <div class="stat-label">VELOCIDAD EXTREMA</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">🎯</div>
                <div class="stat-label">CONVERSIÓN OPTIMIZADA</div>
            </div>
        </div>

        <div class="form-body">
            <div class="section-title">
                <lord-icon src="https://cdn.lordicon.com/wxnxiano.json" trigger="loop" colors="primary:#1976d2" style="width:22px;height:22px"></lord-icon>
                Requerimientos del proyecto
            </div>
            <p style="font-size: 0.8rem; color: #475569; margin-bottom: 1.5rem;">
                Datos por pasos. Tras el envío, contacto por correo o WhatsApp.
            </p>

            <form id="leadForm">
                <div class="form-group">
                    <div class="form-label">
                        <lord-icon src="https://cdn.lordicon.com/dxoymzgq.json" trigger="hover" colors="primary:#1976d2" style="width:18px;height:18px"></lord-icon>
                        ¿Cómo te llamas?
                    </div>
                    <div class="input-wrapper">
                        <div class="input-icon">
                            <lord-icon src="https://cdn.lordicon.com/dxoymzgq.json" trigger="hover" colors="primary:#94a3b8" style="width:20px;height:20px"></lord-icon>
                        </div>
                        <input type="text" id="nombre" class="form-input" placeholder="Tu nombre">
                    </div>
                    <div class="validation-message" id="nombreError"></div>
                </div>

                <div class="form-group">
                    <div class="form-label">
                        <lord-icon src="https://cdn.lordicon.com/kdduutaw.json" trigger="hover" colors="primary:#1976d2" style="width:18px;height:18px"></lord-icon>
                        Nombre de tu empresa o proyecto
                    </div>
                    <div class="input-wrapper">
                        <div class="input-icon">
                            <lord-icon src="https://cdn.lordicon.com/kdduutaw.json" trigger="hover" colors="primary:#94a3b8" style="width:20px;height:20px"></lord-icon>
                        </div>
                        <input type="text" id="empresa" class="form-input" placeholder="Marca, razón social o nombre del proyecto">
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-label">
                        <lord-icon src="https://cdn.lordicon.com/yyecauzv.json" trigger="loop" colors="primary:#1976d2" style="width:18px;height:18px"></lord-icon>
                        ¿A qué se dedica tu negocio?
                    </div>
                    <div class="radio-group" id="rubroGroup">
                        <div class="radio-option" data-value="servicios">
                            <input type="radio" name="rubro" value="servicios">
                            <span class="radio-text">💼 Servicios Profesionales</span>
                        </div>
                        <div class="radio-option" data-value="productos">
                            <input type="radio" name="rubro" value="productos">
                            <span class="radio-text">🛍️ Venta de Productos</span>
                        </div>
                        <div class="radio-option" data-value="local">
                            <input type="radio" name="rubro" value="local">
                            <span class="radio-text">📍 Negocio Local</span>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="selector-label">
                        <lord-icon src="https://cdn.lordicon.com/mdgrhyca.json" trigger="loop" colors="primary:#1976d2" style="width:20px;height:20px"></lord-icon>
                        <span>¿Cuál es el objetivo principal de tu nueva web?</span>
                    </div>
                    <div class="keywords-grid" id="objetivoGrid">
                        <div class="keyword-option" data-value="leads">
                            <lord-icon src="https://cdn.lordicon.com/wxnxiano.json" trigger="hover" colors="primary:#1976d2" style="width:16px;height:16px"></lord-icon>
                            Captar leads
                        </div>
                        <div class="keyword-option" data-value="ventas">
                            <lord-icon src="https://cdn.lordicon.com/hbvgknxo.json" trigger="hover" colors="primary:#1976d2" style="width:16px;height:16px"></lord-icon>
                            Vender online
                        </div>
                        <div class="keyword-option" data-value="reservas">
                            <lord-icon src="https://cdn.lordicon.com/nobciafo.json" trigger="hover" colors="primary:#1976d2" style="width:16px;height:16px"></lord-icon>
                            Reservas / Agendamiento
                        </div>
                        <div class="keyword-option" data-value="credibilidad">
                            <lord-icon src="https://cdn.lordicon.com/wloilxuq.json" trigger="hover" colors="primary:#1976d2" style="width:16px;height:16px"></lord-icon>
                            Credibilidad profesional
                        </div>
                    </div>
                    <input type="hidden" id="objetivoSeleccionado" value="">
                    <div class="input-wrapper" style="margin-top: 0.8rem;">
                        <div class="input-icon">
                            <lord-icon src="https://cdn.lordicon.com/yyecauzv.json" trigger="hover" colors="primary:#94a3b8" style="width:20px;height:20px"></lord-icon>
                        </div>
                        <input type="text" id="objetivoEspecifico" class="form-input" placeholder="Sé específico: captar leads, vender productos, marca personal...">
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-label">
                        <lord-icon src="https://cdn.lordicon.com/jeiidafo.json" trigger="hover" colors="primary:#1976d2" style="width:18px;height:18px"></lord-icon>
                        ¿Tienes una web actual, referencia o nombre ideal para tu dominio? <span class="optional">(opcional)</span>
                    </div>
                    <div class="input-wrapper">
                        <div class="input-icon">
                            <lord-icon src="https://cdn.lordicon.com/jeiidafo.json" trigger="hover" colors="primary:#94a3b8" style="width:20px;height:20px"></lord-icon>
                        </div>
                        <input type="text" id="referenciaWeb" class="form-input" placeholder="URL, referencia o el dominio que imaginas">
                    </div>
                </div>

                <div class="form-group">
                    <div class="selector-label">
                        <lord-icon src="https://cdn.lordicon.com/elkhjhci.json" trigger="loop" colors="primary:#1976d2" style="width:20px;height:20px"></lord-icon>
                        <span>¿Qué personalidad visual buscas para tu sitio?</span>
                    </div>
                    <div class="visual-grid" id="visualGroup">
                        <div class="visual-option" data-value="moderno">
                            <lord-icon src="https://cdn.lordicon.com/wloilxuq.json" trigger="hover" colors="primary:#1976d2" style="width:32px;height:32px"></lord-icon>
                            <span class="visual-text">Moderno / Minimalista</span>
                        </div>
                        <div class="visual-option" data-value="corporativo">
                            <lord-icon src="https://cdn.lordicon.com/kdduutaw.json" trigger="hover" colors="primary:#1976d2" style="width:32px;height:32px"></lord-icon>
                            <span class="visual-text">Corporativo / Profesional</span>
                        </div>
                        <div class="visual-option" data-value="creativo">
                            <lord-icon src="https://cdn.lordicon.com/yyecauzv.json" trigger="hover" colors="primary:#1976d2" style="width:32px;height:32px"></lord-icon>
                            <span class="visual-text">Creativo / Impactante</span>
                        </div>
                        <div class="visual-option" data-value="elegante">
                            <lord-icon src="https://cdn.lordicon.com/yaogxvnw.json" trigger="hover" colors="primary:#1976d2" style="width:32px;height:32px"></lord-icon>
                            <span class="visual-text">Elegante / Sofisticado</span>
                        </div>
                    </div>
                    <input type="hidden" id="visualSeleccionado" value="">
                </div>

                <div class="form-group">
                    <div class="form-label">
                        <lord-icon src="https://cdn.lordicon.com/kkvxgzit.json" trigger="hover" colors="primary:#1976d2" style="width:18px;height:18px"></lord-icon>
                        Correo electrónico
                    </div>
                    <div class="input-wrapper">
                        <div class="input-icon">
                            <lord-icon src="https://cdn.lordicon.com/kkvxgzit.json" trigger="hover" colors="primary:#94a3b8" style="width:20px;height:20px"></lord-icon>
                        </div>
                        <input type="email" id="email" class="form-input" placeholder="tu@correo.com">
                    </div>
                    <div class="validation-message" id="emailError"></div>
                </div>

                <div class="form-group">
                    <div class="form-label">
                        <lord-icon src="https://cdn.lordicon.com/ttioogfl.json" trigger="hover" colors="primary:#1976d2" style="width:18px;height:18px"></lord-icon>
                        WhatsApp
                    </div>
                    <div class="input-wrapper">
                        <div class="input-icon">
                            <lord-icon src="https://cdn.lordicon.com/ttioogfl.json" trigger="hover" colors="primary:#94a3b8" style="width:20px;height:20px"></lord-icon>
                        </div>
                        <input type="tel" id="whatsapp" class="form-input" placeholder="+58 412 356 3070">
                    </div>
                    <div class="info-note">Te escribiré personalmente para coordinar el despliegue técnico.</div>
                </div>

                <div class="progress-section">
                    <div class="progress-header">
                        <span>📊 Completado</span>
                        <span id="progresoPorcentaje">0%</span>
                    </div>
                    <div class="progress-bar-bg">
                        <div class="progress-fill" id="progressFill"></div>
                    </div>
                </div>

                <button type="submit" class="submit-btn" id="submitBtn">
                    <lord-icon src="https://cdn.lordicon.com/msqejhys.json" trigger="hover" colors="primary:#ffffff" style="width:24px;height:24px"></lord-icon>
                    Enviar solicitud
                </button>

                <div class="delivery-note">
                    ⚡ Recordatorio: Tu sitio será entregado en un bloque de 48 a 72 horas tras la confirmación del pago.
                </div>

                <div class="form-footer" style="margin-top: 1rem; text-align: center; font-size: 0.7rem; color: #94a3b8;">
                    Gabriel Delgado · Consultoría de software de alto rendimiento<br>
                    Cada proyecto es arquitectura con propósito.
                </div>
            </form>
        </div>
    </div>
</div>

<script>
    // Elementos del formulario
    const nombreInput = document.getElementById('nombre');
    const empresaInput = document.getElementById('empresa');
    const emailInput = document.getElementById('email');
    const whatsappInput = document.getElementById('whatsapp');
    const objetivoEspecifico = document.getElementById('objetivoEspecifico');
    
    const radioOptions = document.querySelectorAll('.radio-option');
    const keywordOptions = document.querySelectorAll('#objetivoGrid .keyword-option');
    const visualOptions = document.querySelectorAll('.visual-option');
    
    const objetivoSeleccionadoHidden = document.getElementById('objetivoSeleccionado');
    const visualSeleccionadoHidden = document.getElementById('visualSeleccionado');
    const progressFill = document.getElementById('progressFill');
    const progresoPorcentajeSpan = document.getElementById('progresoPorcentaje');
    const form = document.getElementById('leadForm');
    const formContainer = document.getElementById('formContainer');

    let selectedRubro = '';
    let selectedObjetivo = '';
    let selectedVisual = '';

    // Datos que se guardarán
    let formData = {};

    // Radio buttons
    radioOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            radioOptions.forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            const radio = opt.querySelector('input');
            if (radio) {
                radio.checked = true;
                selectedRubro = radio.value;
            }
            calcularProgreso();
        });
    });

    // Keywords objetivo
    keywordOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            keywordOptions.forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            selectedObjetivo = opt.getAttribute('data-value');
            objetivoSeleccionadoHidden.value = selectedObjetivo;
            calcularProgreso();
        });
    });

    // Visual options
    visualOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            visualOptions.forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            selectedVisual = opt.getAttribute('data-value');
            visualSeleccionadoHidden.value = selectedVisual;
            calcularProgreso();
        });
    });

    function calcularProgreso() {
        let progreso = 0;
        const nombreValido = nombreInput.value.trim().length >= 2;
        const emailValido = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(emailInput.value.trim());
        const whatsappValido = whatsappInput.value.trim().length >= 7;
        const rubroValido = selectedRubro !== '';
        const objetivoValido = selectedObjetivo !== '' || objetivoEspecifico.value.trim() !== '';
        const visualValido = selectedVisual !== '';

        let camposCompletados = 0;
        if (nombreValido) camposCompletados++;
        if (emailValido) camposCompletados++;
        if (whatsappValido) camposCompletados++;
        if (rubroValido) camposCompletados++;
        if (objetivoValido) camposCompletados++;
        if (visualValido) camposCompletados++;

        progreso = Math.round((camposCompletados / 6) * 100);
        progressFill.style.width = progreso + '%';
        progresoPorcentajeSpan.innerText = progreso + '%';

        aplicarEstiloCampo(nombreInput, nombreValido);
        aplicarEstiloCampoEmail(emailInput, emailValido);
        aplicarEstiloCampo(whatsappInput, whatsappValido);
    }

    function aplicarEstiloCampo(input, valido) {
        if (input.value.trim() === '') {
            input.classList.remove('success', 'error');
            return;
        }
        if (valido) {
            input.classList.add('success');
            input.classList.remove('error');
        } else {
            input.classList.add('error');
            input.classList.remove('success');
        }
    }

    function aplicarEstiloCampoEmail(input, valido) {
        if (input.value.trim() === '') {
            input.classList.remove('success', 'error');
            return;
        }
        if (valido) {
            input.classList.add('success');
            input.classList.remove('error');
        } else {
            input.classList.add('error');
            input.classList.remove('success');
        }
    }

    function mostrarError(campoId, mensaje) {
        const errorDiv = document.getElementById(campoId + 'Error');
        if (errorDiv) errorDiv.innerText = mensaje;
    }

    nombreInput.addEventListener('input', () => {
        calcularProgreso();
        if (nombreInput.value.trim().length >= 2) mostrarError('nombre', '');
        else if (nombreInput.value.trim().length > 0) mostrarError('nombre', '⚠️ Mínimo 2 caracteres');
    });
    
    emailInput.addEventListener('input', () => {
        calcularProgreso();
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        if (email === '') mostrarError('email', '');
        else if (!emailRegex.test(email)) mostrarError('email', '✉️ Ingresa un email válido');
        else mostrarError('email', '');
    });

    whatsappInput.addEventListener('input', calcularProgreso);
    objetivoEspecifico.addEventListener('input', calcularProgreso);

    // Función para mostrar la pantalla de confirmación
    function showConfirmationScreen(nombre, empresa) {
        const empresaMostrar = empresa || "tu proyecto";
        
        const confirmationHTML = `
            <div class="form-card">
                <div class="form-header">
                    <div class="header-icon">
                        <lord-icon
                            src="https://cdn.lordicon.com/lupuorrc.json"
                            trigger="loop"
                            colors="primary:#ffffff,secondary:#7dd3fc"
                            style="width:70px;height:70px">
                        </lord-icon>
                    </div>
                    <h1>✅ Solicitud Recibida</h1>
                    <p>Paso Final para Reserva</p>
                </div>

                <div class="confirmation-screen">
                    <div class="success-icon">
                        <lord-icon src="https://cdn.lordicon.com/lupuorrc.json" trigger="loop" colors="primary:#1976d2" style="width:80px;height:80px"></lord-icon>
                    </div>
                    
                    <div class="confirmation-title">Ficha de reserva · Proyecto 3000</div>
                    <div class="confirmation-subtitle">Tu cupo está asegurado por 24 horas</div>

                    <div class="resumen-card">
                        <div class="resumen-title">
                            <lord-icon src="https://cdn.lordicon.com/wxnxiano.json" trigger="loop" colors="primary:#1976d2" style="width:18px;height:18px"></lord-icon>
                            Resumen de solicitud
                        </div>
                        <div class="resumen-item">
                            <span class="resumen-label">👤 Nombre:</span>
                            <span class="resumen-value">${escapeHtml(nombre)}</span>
                        </div>
                        <div class="resumen-item">
                            <span class="resumen-label">🏢 Empresa / Proyecto:</span>
                            <span class="resumen-value">${escapeHtml(empresaMostrar)}</span>
                        </div>
                    </div>

                    <div class="payment-section">
                        <div class="payment-title">
                            <lord-icon src="https://cdn.lordicon.com/hbvgknxo.json" trigger="loop" colors="primary:#1976d2" style="width:24px;height:24px"></lord-icon>
                            💰 Para asegurar tu cupo de los 30 disponibles y congelar el precio de $99, realiza el pago y adjunta el comprobante.
                        </div>

                        <div class="payment-method">
                            <div class="method-name">
                                <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#1976d2" style="width:20px;height:20px"></lord-icon>
                                Zelle
                            </div>
                            <div class="method-details">
                                <strong>Email:</strong> Sandryquezada@gmail.com<br>
                                <strong>Beneficiario:</strong> Sandra Quezada Da Silva
                            </div>
                        </div>

                        <div class="payment-method">
                            <div class="method-name">
                                <lord-icon src="https://cdn.lordicon.com/zmkotitn.json" trigger="loop" colors="primary:#1976d2" style="width:20px;height:20px"></lord-icon>
                                Binance
                            </div>
                            <div class="method-details">
                                <strong>Email:</strong> gabrieldelgado110@gmail.com<br>
                                <strong>User ID:</strong> ingenierogd10<br>
                                <strong>UID:</strong> 336165001
                            </div>
                        </div>
                    </div>

                    <a href="https://wa.me/584123563070?text=Hola%20Gabriel%2C%20ya%20realic%C3%A9%20el%20pago%20para%20el%20proyecto%20de%20${encodeURIComponent(empresaMostrar)}.%20Adjunto%20el%20comprobante." 
                       target="_blank" 
                       class="whatsapp-button">
                        <lord-icon src="https://cdn.lordicon.com/ttioogfl.json" trigger="hover" colors="primary:#ffffff" style="width:24px;height:24px"></lord-icon>
                        Enviar Comprobante por WhatsApp (+58 412 356 3070)
                    </a>

                    <div class="note-text">
                        📌 El mensaje incluye Zelle (Sandra) y Binance (Gabriel) para que no pierdas los datos.<br>
                        Adjunta tu capture de pago antes de enviar.
                    </div>

                    <div class="back-link">
                        <a href="#" onclick="location.reload()">← Volver al formulario</a>
                    </div>
                </div>
            </div>
        `;
        
        formContainer.outerHTML = confirmationHTML;
        
        // Reinicializar Lordicon para los nuevos elementos
        if (typeof Lordicon !== 'undefined') {
            const newIcons = document.querySelectorAll('lord-icon');
            newIcons.forEach(icon => {
                if (icon.getAttribute('trigger') === 'loop' || icon.getAttribute('trigger') === 'hover') {
                    // Lordicon se inicializa automáticamente
                }
            });
        }
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombreVal = nombreInput.value.trim();
        const emailVal = emailInput.value.trim();
        const whatsappVal = whatsappInput.value.trim();
        const empresaVal = empresaInput.value.trim();
        const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        
        let valid = true;
        if (nombreVal.length < 2) {
            mostrarError('nombre', '❌ Escribe tu nombre completo');
            valid = false;
        }
        if (!emailRegex.test(emailVal)) {
            mostrarError('email', '❌ Introduce un email real');
            valid = false;
        }
        if (whatsappVal.length < 7) {
            mostrarError('whatsapp', '📱 Ingresa tu WhatsApp');
            document.getElementById('whatsapp').classList.add('error');
            valid = false;
        }
        if (selectedRubro === '') {
            alert('✨ Selecciona a qué se dedica tu negocio');
            valid = false;
        }
        if (selectedObjetivo === '' && objetivoEspecifico.value.trim() === '') {
            alert('🎯 Indica el objetivo principal de tu web');
            valid = false;
        }
        
        if (valid) {
            // Guardar datos y mostrar pantalla de confirmación
            showConfirmationScreen(nombreVal, empresaVal);
        } else {
            const errorFields = document.querySelectorAll('.form-input.error');
            errorFields.forEach(field => {
                field.style.animation = 'shake 0.3s ease';
                setTimeout(() => field.style.animation = '', 400);
            });
        }
    });

    calcularProgreso();

    const styleShake = document.createElement('style');
    styleShake.textContent = `@keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-4px)} 75%{transform:translateX(4px)} }`;
    document.head.appendChild(styleShake);
</script>
</body>
</html>