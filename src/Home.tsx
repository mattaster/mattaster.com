import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <header className="hero">
                <div className="hero-content">
                    <h1 className="hero-title animate-on-scroll">
                        <span className="gradient-text">Performance Marketing</span> <br />
                        Brand Strategy & Consumer Insights
                    </h1>
                    <p className="hero-subtitle animate-on-scroll">
                        Strategic expertise for high-growth companies. We bridge the gap between vision and execution.
                    </p>
                    <div className="hero-actions animate-on-scroll">
                        <Link to="/contact" className="btn-primary large">Schedule a Consultation</Link>
                        <a href="#about" className="btn-secondary large">Explore Services</a>
                    </div>
                </div>
                <div className="hero-bg-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                </div>
            </header>

            <section id="about" className="section">
                <div className="section-content animate-on-scroll">
                    <h2 className="section-title">About Matt Aster</h2>
                    <div className="glass-card full-width text-left md:text-center">
                        <p className="about-text" style={{ fontSize: '1.2rem', textAlign: 'center', margin: '0 auto', maxWidth: '900px' }}>
                            Analytical, collaborative, and progressive Marketing Leader with a proven track record of success in driving revenue growth and brand recognition. Recognized for optimizing marketing strategies and delivering exceptional results in highly competitive markets. Innovative mindset, consistently developing scalable and sustainable marketing initiatives that generate substantial ROI. Natural talent for identifying market trends and consumer insights, translating them into impactful campaigns that captivate target audiences. Respected and supportive leader who understands how to inspire and motivate teams to achieve ambitious goals. Engages stakeholders through a focus on building strong relationships and aligning marketing efforts with business objectives.
                        </p>
                    </div>
                </div>
            </section>

            <section id="services" className="section">
                <h2 className="section-title animate-on-scroll">Our Expertise</h2>
                <div className="grid">
                    <div className="glass-card feature animate-on-scroll">
                        <div className="icon">📈</div>
                        <h3>Strategic Planning</h3>
                        <p>Comprehensive roadmaps tailored to your unique market position and goals.</p>
                    </div>
                    <div className="glass-card feature animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        <div className="icon">🔍</div>
                        <h3>Market Analysis</h3>
                        <p>Deep-dive insights into competitors and trends to uncover hidden opportunities.</p>
                    </div>
                    <div className="glass-card feature animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                        <div className="icon">🚀</div>
                        <h3>Growth Optimization</h3>
                        <p>Data-driven strategies to maximize revenue and operational efficiency.</p>
                    </div>
                </div>
            </section>

            <section id="experience" className="section">
                <h2 className="section-title animate-on-scroll">Industry Experience</h2>
                <div className="grid grid-2" style={{ gap: '2rem' }}>
                    <div className="glass-card expand animate-on-scroll">
                        <h3>🏦 Financial Services</h3>
                        <ul>
                            <li>Demand/Lead gen</li>
                            <li>Growth and Retention</li>
                            <li>Lifecycle Marketing</li>
                            <li>Credit repair & Debt consolidation</li>
                            <li>B2B (institutional) & B2C expertise</li>
                        </ul>
                    </div>
                    <div className="glass-card expand animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        <h3>🏥 Healthcare & Pharmaceuticals</h3>
                        <ul>
                            <li>Consulted for 3 of the top 5 health insurance payers in the US</li>
                            <li>Pharmacy Management and Operations</li>
                            <li>Compounding medications & Prescription drugs</li>
                            <li>Procurement & Logistics</li>
                        </ul>
                    </div>
                    <div className="glass-card expand animate-on-scroll">
                        <h3>🛒 eCommerce & CPG</h3>
                        <ul>
                            <li>Scaling from 4 SKUs to 4 million SKUs</li>
                            <li>Subscription-based eCommerce</li>
                            <li>Upsell and Cross-sell strategy</li>
                            <li>Off-site and on-site advertising/promotion</li>
                            <li>CPG experience for home goods and medical supplies</li>
                        </ul>
                    </div>
                    <div className="glass-card expand animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        <h3>🛡️ Property & Casualty Insurance</h3>
                        <ul>
                            <li>Over 10 years of insurance experience</li>
                            <li>Auto and Home P&C Insurance (7 of the top 10 carriers)</li>
                            <li>Underwritten product insurance</li>
                            <li>Over 5 years of Pet Insurance experience</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section metrics">
                <h2 className="section-title animate-on-scroll">Proven Results</h2>
                <div className="metrics-grid">
                    <div className="metric-item animate-on-scroll">
                        <div className="metric-number">6</div>
                        <div className="metric-label">Fortune 200 Brands</div>
                        <p>Served as the primary marketing consultant</p>
                    </div>
                    <div className="metric-item animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        <div className="metric-number">$840k</div>
                        <div className="metric-label">In New Pipeline</div>
                        <p>Achieved a 4% increase in annual recurring revenue for new commitments</p>
                    </div>
                    <div className="metric-item animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                        <div className="metric-number">3x</div>
                        <div className="metric-label">Growth Rate</div>
                        <p>Increased average order value by 7% and tripled business unit growth</p>
                    </div>
                </div>
            </section>

            <section className="cta-section animate-on-scroll">
                <h2>Ready to Unlock Your Business Potential?</h2>
                <p>Partner with a strategic expert to drive your business forward.</p>
                <Link to="/contact" className="btn-primary large">Contact Me Today</Link>
            </section>
        </>
    );
}
