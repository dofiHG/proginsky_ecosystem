def render_payment_page(title: str, text: str, button_text: str, button_url: str, success: bool = True) -> str:
    icon = "✓" if success else "×"
    status = "Платёж подтверждён" if success else "Оплата не завершена"
    status_class = "success" if success else "fail"

    return f"""
    <!doctype html>
    <html lang="ru">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{title}</title>
        <style>
            * {{
                box-sizing: border-box;
            }}

            body {{
                margin: 0;
                min-height: 100vh;
                font-family: Arial, sans-serif;
                background: #f5f6f8;
                color: #313849;
            }}

            .header {{
                height: 72px;
                display: flex;
                align-items: center;
                padding: 0 40px;
                background: #313849;
                color: #ffffff;
                font-size: 18px;
                font-weight: 700;
            }}

            .page {{
                min-height: calc(100vh - 72px);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 32px 20px;
            }}

            .card {{
                width: 100%;
                max-width: 560px;
                padding: 48px;
                background: #ffffff;
                border: 1px solid #e8eaf0;
                border-radius: 24px;
                box-shadow: 0 18px 50px rgba(49, 56, 73, 0.09);
                text-align: center;
            }}

            .icon {{
                width: 78px;
                height: 78px;
                margin: 0 auto 28px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                font-size: 40px;
                font-weight: 700;
            }}

            .icon.success {{
                color: #d37518;
                background: rgba(211, 117, 24, 0.12);
            }}

            .icon.fail {{
                color: #b44545;
                background: rgba(180, 69, 69, 0.10);
            }}

            .status {{
                margin-bottom: 12px;
                font-size: 14px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.08em;
            }}

            .status.success {{
                color: #d37518;
            }}

            .status.fail {{
                color: #b44545;
            }}

            h1 {{
                margin: 0 0 16px;
                font-size: 34px;
                line-height: 1.15;
                color: #313849;
            }}

            p {{
                margin: 0 auto;
                max-width: 430px;
                font-size: 17px;
                line-height: 1.6;
                color: #72798a;
            }}

            .button {{
                margin-top: 32px;
                min-height: 56px;
                padding: 0 28px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 12px;
                border-radius: 14px;
                background: #d37518;
                color: #ffffff;
                text-decoration: none;
                font-size: 16px;
                font-weight: 700;
                transition: transform 0.15s ease, box-shadow 0.15s ease;
                box-shadow: 0 10px 24px rgba(211, 117, 24, 0.20);
            }}

            .button:hover {{
                transform: translateY(-1px);
                box-shadow: 0 14px 30px rgba(211, 117, 24, 0.26);
            }}

            .footer {{
                margin-top: 32px;
                padding-top: 24px;
                border-top: 1px solid #eceef2;
                font-size: 13px;
                line-height: 1.5;
                color: #9a9fac;
            }}

            @media (max-width: 600px) {{
                .header {{
                    height: 60px;
                    padding: 0 20px;
                }}

                .page {{
                    min-height: calc(100vh - 60px);
                }}

                .card {{
                    padding: 38px 24px;
                    border-radius: 20px;
                }}

                h1 {{
                    font-size: 28px;
                }}
            }}
        </style>
    </head>

    <body>
        <header class="header">
            ПРОГИНСКИЙ
        </header>

        <main class="page">
            <section class="card">
                <div class="icon {status_class}">{icon}</div>
                <div class="status {status_class}">{status}</div>

                <h1>{title}</h1>
                <p>{text}</p>

                <a class="button" href="{button_url}">
                    {button_text} →
                </a>

                <div class="footer">
                    Если у вас возникнут вопросы по оплате или доступу, обратитесь в поддержку ПРОГИНСКИЙ.
                </div>
            </section>
        </main>
    </body>
    </html>
    """