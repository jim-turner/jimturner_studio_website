const nodeData = {
    'root': {
        category: 'Strategic Objective',
        title: 'Optimizing Retirement Mobility',
        content: `
            <p>The transition to retirement requires a tool that balances freedom with fiscal responsibility. A preliminary audit of the domestic RV market revealed a gap in high-longevity, small-footprint assets.</p>
            <p>This project applies a consulting framework to global procurement, identifying the Toyota Camroad as the primary candidate for optimization.</p>
        `,
        insight: 'Consultant Note: Innovation often starts by rejecting the default local options.'
    },
    'mech': {
        category: 'Engineering Rigor',
        title: 'Mechanical Simplicity',
        content: `
            <p>Modern North American diesel platforms are burdened by complex emissions sensors (DEF/DPF) that are prone to "Limp Mode" failures. The JDM Toyota 1HZ/2KD engines prioritize purely mechanical reliability.</p>
            
            <div class="comparison-container">
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Domestic Class C</th>
                            <th>Toyota Camroad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Engine Tech</td>
                            <td>Electronic / DEF</td>
                            <td>Pure Mechanical</td>
                        </tr>
                        <tr>
                            <td>Length</td>
                            <td>24ft - 31ft</td>
                            <td>16.4ft (Std. Spot)</td>
                        </tr>
                        <tr>
                            <td>Chassis</td>
                            <td>Ford/Chevy</td>
                            <td>Toyota Hilux/Dyna</td>
                        </tr>
                        <tr>
                            <td>Body Shell</td>
                            <td>Wood/Staples</td>
                            <td>Fiberglass Mono</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        insight: 'In remote environments, simplicity is the ultimate form of reliability.'
    },
    'finance': {
        category: 'Economic Analysis',
        title: 'Capital Preservation',
        content: `
            <p>New RVs typically depreciate 20-30% in year one. By leveraging the 25-year import rule and current Yen-to-Dollar arbitrage, the Camroad represents an appreciating or stable asset class.</p>
            <p><strong>Total Landed Cost vs. US Market:</strong> Purchase + Shipping + Customs = ~$22k. Current US resale = ~$38k.</p>
        `,
        insight: 'Treating a lifestyle purchase as a capital allocation strategy.'
    },
    'spatial': {
        category: 'Design Optimization',
        title: 'The 16.4ft Constraint',
        content: `
            <p>Utility is maximized when the tool can be used in 100% of environments. The Camroad utilizes a cab-over design, placing the habitat over the engine to minimize total length while maintaining 4-person capacity.</p>
        `,
        insight: 'Optimization is about maximizing the "Utility-per-Square-Foot" ratio.'
    },
    'pivot': {
        category: 'Logistics Execution',
        title: 'The JDM Pivot',
        content: `
            <p>The decision to import directly involves navigating Japanese auction grading (Grade 4+), RORO maritime logistics, and Federal DOT/EPA exemptions.</p>
            <p>This phase demonstrates the capability to manage high-complexity international supply chains for high-value assets.</p>
        `,
        insight: 'Strategy is nothing without a flawless execution plan for complex bureaucracy.'
    }
};

function showNode(id) {
    const data = nodeData[id];
    const drawer = document.getElementById('drawer');
    const content = document.getElementById('drawer-content');
    

    // Update Drawer Content
    content.innerHTML = `
        <p style="color: var(--accent-blue); font-size: 0.75rem; text-transform: uppercase; font-weight: bold;">${data.category}</p>
        <h2 style="margin-top: 5px; font-weight: 300; border-bottom: 1px solid var(--border); padding-bottom: 15px;">${data.title}</h2>
        <div style="color: var(--text-dim); line-height: 1.8; font-size: 0.95rem;">
            ${data.content}
        </div>
        <div style="margin-top: 30px; padding: 20px; background: rgba(56, 189, 248, 0.05); border-left: 4px solid var(--accent-blue);">
            <strong style="color: var(--accent-blue); font-size: 0.8rem;">CONSULTANT INSIGHT</strong><br>
            <em style="color: var(--text-main); font-size: 0.9rem;">"${data.insight}"</em>
        </div>
    `;

    drawer.classList.add('active');
}

function closeDrawer() {
    document.getElementById('drawer').classList.remove('active');
}