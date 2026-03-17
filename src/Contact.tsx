import { useEffect, useRef } from 'react';

export default function Contact() {
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

        // HubSpot explicitly needs its script loaded to parse the data attributes.
        // Safest approach for SPA React is dynamically injecting using the snippet if it hasn't mapped yet.
        if (!document.getElementById('hs-script-loader')) {
            const script = document.createElement('script');
            script.src = "https://js-na2.hsforms.net/forms/embed/243314838.js";
            script.id = 'hs-script-loader';
            script.defer = true;
            document.body.appendChild(script);
        } else {
            // If script is already loaded but we navigated back, we may need to force a re-render
            // However, HubSpot's V2 observer script usually catches new forms automatically.
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="section" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '10rem' }}>
            <div className="section-content animate-on-scroll" style={{ width: '100%' }}>
                <h2 className="section-title">Get in Touch</h2>
                <p style={{ marginBottom: '3rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px' }}>
                    Ready to accelerate your growth? Fill out the form below to schedule a consultation with Matt Aster.
                </p>

                <div className="glass-card full-width" style={{ maxWidth: '800px', width: '100%', margin: '0 auto', background: 'var(--bg-color-alt)' }}>
                    {/* HubSpot Form Placeholder */}
                    <div
                        ref={formRef}
                        className="hs-form-frame"
                        data-region="na2"
                        data-form-id="88278fd8-097e-4749-b4d3-d5286be31440"
                        data-portal-id="243314838"
                    ></div>
                </div>
            </div>
        </div>
    );
}
