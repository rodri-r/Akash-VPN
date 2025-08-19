import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Manual sidebar setup for Akash VPN docs
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Getting Started',
    },
    {
      type: 'doc',
      id: 'faq',
      label: 'FAQ',
    },
    // More sections to be added here later
    // {
    //   type: 'category',
    //   label: 'Advanced',
    //   items: ['provider-guide', 'deployment'],
    // },
  ],
};

export default sidebars;
