const ParticleConfig = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#181725",
    },
    shape: {
      type: "image",
      image: [
        {
          src: "https://w7.pngwing.com/pngs/23/280/png-transparent-js-logo-logos-logos-and-brands-icon-thumbnail.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://w7.pngwing.com/pngs/186/205/png-transparent-react-native-react-logos-brands-icon-thumbnail.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://w7.pngwing.com/pngs/654/227/png-transparent-html-computer-icons-web-page-world-wide-web-angle-rectangle-logo-thumbnail.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://w7.pngwing.com/pngs/226/1010/png-transparent-web-development-cascading-style-sheets-css3-computer-icons-others-miscellaneous-angle-rectangle-thumbnail.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://w7.pngwing.com/pngs/429/30/png-transparent-node-js-brands-icon-thumbnail.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://w7.pngwing.com/pngs/991/347/png-transparent-mongodb-inc-computer-icons-nosql-database-mongodb-icons-leaf-logo-monochrome-thumbnail.png",
          width: 32,
          height: 32,
        },
      ],
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 11,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    // line_linked: {
    //   enable: true,
    //   distance: 120,
    //   color: "#181725",
    //   opacity: 0.4,
    //   width: 1,
    // },
    links: {
      color: "#181725",
      distance: 150,
      enable: false,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 2,
      straight: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 287.7122877122877,
        size: 8,
        duration: 2,
        opacity: 0.04795204795204795,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: true,
};
export default ParticleConfig;
