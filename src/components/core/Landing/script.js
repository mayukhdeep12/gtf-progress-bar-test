import samples from 'rediminds-cta/src/samples';
import DragAndDrop from 'rediminds-cta/src/components/widgets/DragAndDrop';

export default {
  name: 'Landing',
  components: {
    DragAndDrop,
  },
 data() {
    return {
      samples,
      version: window.GLANCE_VERSION || 'no version available',
    };
  },
// mounted: function() {
//     if ('user' in localStorage) {
//       console.log("");
//     } else {
//       location.replace("/");
//     }
//   },
  methods: {
      openSample(sample) {
      const urls = [];
      const names = [];
      for (let i = 0; i < sample.datasets.length; ++i) {
        urls.push(sample.datasets[i].url);
        names.push(sample.datasets[i].name);
      }
      this.$emit('open-urls', sample.label, urls, names);
    },
  },
};
