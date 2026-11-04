import { ProjectDetail } from './ProjectDetail';
import tomisHoneyLogo from './static/tomis-honey-logo.png';

const live = { label: 'Live', color: 'green' as const };
const inDevelopment = { label: 'In development', color: 'yellow' as const };

// TODO: add dashboard screenshot (pass `image`).
export function TomisHoneyProject() {
  return (
    <ProjectDetail
      title="Tomi's Honey — Digital Transformation"
      description="Fractional CTO for a Romanian honey producer: custom Odoo 19 ERP with end-to-end lot traceability, a shop-floor PWA, e-commerce automations and AI agents."
      fullDescription={[]}
      tags={['Odoo 19', 'Python', 'PostgreSQL', 'Docker', 'Linux', 'n8n', 'PWA', 'AI Agents']}
      status="Partly live · In development"
      statusColor="yellow"
      type="Fractional CTO · External Technical Partner — Tomi's Honey"
      website="https://tomishoney.ro"
      logo={tomisHoneyLogo}
      features={[]}
      sections={[
        {
          heading: 'Context',
          paragraphs: [
            "Tomi's Honey is a traditional Romanian honey producer moving from manual processes to an integrated system.",
          ],
        },
        {
          heading: 'Challenge',
          bullets: [
            'Food-safety traceability for every lot, from raw honey to finished jar',
            'Stock accuracy across production, warehouse and online sales',
            'Manual double entry between orders, invoices and shipping',
          ],
        },
        {
          heading: 'What I Built',
          groups: [
            {
              title: 'ERP & Traceability',
              status: live,
              items: [
                'Custom Odoo 19 ERP covering the full production flow: raw honey intake, lab-result quarantine, blending, packaging recipes, finished goods and sales',
                'End-to-end lot traceability from supplier barrel to customer jar',
                'Expiry tracking and FEFO picking to meet food-safety requirements',
              ],
            },
            {
              title: 'Shop Floor & Warehouse',
              status: live,
              items: [
                'Mobile PWA for the production floor and warehouse',
                'Work is recorded where it happens, directly in the ERP',
              ],
            },
            {
              title: 'Sales & E-commerce',
              status: inDevelopment,
              items: [
                'Online store synced live with warehouse stock',
                'n8n automations linking orders to SmartBill invoicing and courier labels, removing manual data entry',
              ],
            },
            {
              title: 'Infrastructure',
              status: inDevelopment,
              items: [
                'On-premise server and private network',
                'Containerized deployment',
                'Secure remote access and role-based permissions',
                'Automated backups',
              ],
            },
            {
              title: 'AI Agents',
              status: inDevelopment,
              items: [
                'Phone voice agent that takes orders straight into the ERP',
                'Store assistant that guides customers and places orders',
                'B2B outreach agents that find shops, pharmacies and cafés and send personalized emails',
              ],
            },
          ],
        },
        {
          heading: 'My Role',
          bullets: [
            'Sole technical owner: architecture, build, deployment and operations',
            'Technology advisor to the owners, including B2B ordering and supplier management',
          ],
        },
        {
          heading: 'Stack',
          tags: ['Odoo 19', 'Python', 'PostgreSQL', 'Docker', 'Linux', 'n8n', 'PWA', 'AI Agents'],
        },
        {
          heading: 'Impact',
          bullets: [
            'Cut time lost to paperwork and to manual entry of orders, stock and production by 80%',
          ],
        },
      ]}
    />
  );
}
