import { RoadmapData } from '@/types/roadmap';

export const roadmapData: RoadmapData = [
  {
    phase: '2025 Q1',
    status: 'completed',
    steps: [
      {
        title: 'Complete Web3.0 Infrastructure Development',
        desc: 'Build a decentralized infrastructure on Solana to ensure high performance and low transaction costs.',
        finished: true
      },
      {
        title: 'Implement AI-Powered Smart Interaction Features',
        desc: 'Integrate AI technology to enable user interaction with AI avatars, delivering personalized social experiences.',
        finished: true
      },
      {
        title: 'Develop Decentralized Incentive Mechanism and Token Economy Model',
        desc: 'Design a token economy model to incentivize users to earn rewards through creation and interaction.',
        finished: true
      },
      {
        title: 'Launch Basic Social Media Features',
        desc: 'Enable users to post content, like, comment, and share, laying the foundation for social interaction.',
        finished: true
      }
    ]
  },
  {
    phase: '2025 Q2',
    status: 'working on',
    steps: [
      {
        title: 'Enhance Content Creation Tools',
        desc: 'Provide creators with advanced tools for content creation and management.',
        finished: true
      },
      {
        title: 'Partner with High-Quality Creators and KOLs',
        desc: "Invite renowned creators and KOLs to join, enriching the platform's content ecosystem.",
        finished: false
      }
    ]
  },
  {
    phase: '2025 Q3',
    status: 'planned',
    steps: [
      {
        title: 'Launch AI Digital Avatar Feature',
        desc: 'Fans can interact 1-on-1 with AI avatars, enjoying experiences similar to interacting with real influencers.',
        finished: false
      },
      {
        title: 'Expand Platform Task System',
        desc: 'Users earn tokens by completing interactive tasks, boosting platform engagement.',
        finished: false
      }
    ]
  }
];
