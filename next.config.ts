import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: '/beyond-smart-meters-the-case-for-hybrid-nic-cards-in-indian-utility-infrastructure',
        destination: '/blogs/beyond-smart-meters-the-case-for-hybrid-nic-cards-in-indian-utility-infrastructure',
        permanent: true,
      },
      {
        source: '/demand-response-2-0-how-indian-utilities-can-use-grid-analytics-to-balance-rooftop-solar-surges',
        destination: '/blogs/demand-response-2-0-how-indian-utilities-can-use-grid-analytics-to-balance-rooftop-solar-surges',
        permanent: true,
      },
      {
        source: '/empowering-the-future-probus-smart-things-journey-in-smart-grid-innovation',
        destination: '/blogs/empowering-the-future-probus-smart-things-journey-in-smart-grid-innovation',
        permanent: true,
      },
      {
        source: '/from-amr-to-grid-intelligence-how-4g-amr-devices-become-distribution-sensors',
        destination: '/blogs/from-amr-to-grid-intelligence-how-4g-amr-devices-become-distribution-sensors',
        permanent: true,
      },
      {
        source: '/gateways-as-grid-orchestrators-how-one-device-shapes-thousands-of-meter-conversations',
        destination: '/blogs/gateways-as-grid-orchestrators-how-one-device-shapes-thousands-of-meter-conversations',
        permanent: true,
      },
      {
        source: '/inside-the-feeder-pillar-why-fsp-monitoring-is-the-missing-link-in-lv-grid-visibility',
        destination: '/blogs/inside-the-feeder-pillar-why-fsp-monitoring-is-the-missing-link-in-lv-grid-visibility',
        permanent: true,
      },
      {
        source: '/iot-for-smart-metering-how-to-get-started-with',
        destination: '/blogs/iot-for-smart-metering-how-to-get-started-with',
        permanent: true,
      },
      {
        source: '/iot-smart-grid-integration-outage-management-fault-detection',
        destination: '/blogs/iot-smart-grid-integration-outage-management-fault-detection',
        permanent: true,
      },
      {
        source: '/plc-vs-rf-mesh-vs-4g-ami-communication-technology-comparison',
        destination: '/blogs/plc-vs-rf-mesh-vs-4g-ami-communication-technology-comparison',
        permanent: true,
      },
      {
        source: '/predictive-grid-maintenance-from-reactive-to-ai-driven-failure-forecasting',
        destination: '/blogs/predictive-grid-maintenance-from-reactive-to-ai-driven-failure-forecasting',
        permanent: true,
      },
      {
        source: '/private-utilities-saving-70-in-smart-meter-opex',
        destination: '/blogs/private-utilities-saving-70-in-smart-meter-opex',
        permanent: true,
      },
      {
        source: '/probus-smart-things-pioneering-the-future-with-3-million',
        destination: '/blogs/probus-smart-things-pioneering-the-future-with-3-million',
        permanent: true,
      },
      {
        source: '/probus-smart-things-pioneering-the-future-with-3-million-series-a-funding',
        destination: '/blogs/probus-smart-things-pioneering-the-future-with-3-million-series-a-funding',
        permanent: true,
      },
      {
        source: '/revolutionizing-the-power-grid-how-probus-smart-things-is-redefining-energy-efficiency-with-iot',
        destination: '/blogs/revolutionizing-the-power-grid-how-probus-smart-things-is-redefining-energy-efficiency-with-iot',
        permanent: true,
      },
      {
        source: '/smart-metering-rollout-rdss-what-every-discom-needs-to-know-2026',
        destination: '/blogs/smart-metering-rollout-rdss-what-every-discom-needs-to-know-2026',
        permanent: true,
      },
      {
        source: '/the-hidden-cost-of-invisible-losses-how-iot-sensors-are-uncovering-12-distribution-loss-in-lv-grids',
        destination: '/blogs/the-hidden-cost-of-invisible-losses-how-iot-sensors-are-uncovering-12-distribution-loss-in-lv-grids',
        permanent: true,
      },
      {
        source: '/the-power-of-data-analytics-in-energy-distribution',
        destination: '/blogs/the-power-of-data-analytics-in-energy-distribution',
        permanent: true,
      },
      {
        source: '/why-communication-fails-before-meters-do-inside-the-design-of-a-resilient-nic-card',
        destination: '/blogs/why-communication-fails-before-meters-do-inside-the-design-of-a-resilient-nic-card',
        permanent: true,
      },
      {
        source: '/why-power-supply-design-determines-the-life-of-smart-grid-hardware',
        destination: '/blogs/why-power-supply-design-determines-the-life-of-smart-grid-hardware',
        permanent: true,
      },
      {
        source: '/wireless-solar-string-monitoring-reduces-om-costs-large-scale-plants',
        destination: '/blogs/wireless-solar-string-monitoring-reduces-om-costs-large-scale-plants',
        permanent: true,
      },
      {
        source: '/smart-meter',
        destination: '/smart-meter-solutions',
        permanent: true,
      },
      {
        source: '/blog/solar-solutions',
        destination: '/solar-solutions',
        permanent: true,
      },
      {
        source: '/blog/smart-grid-integration',
        destination: '/smart-grid-integration',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
