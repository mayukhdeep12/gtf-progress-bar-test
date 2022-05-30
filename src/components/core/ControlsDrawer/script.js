import Datasets from 'rediminds-cta/src/components/core/Datasets';
import EditTools from 'rediminds-cta/src/components/core/EditTools';
import GlobalSettings from 'rediminds-cta/src/components/core/GlobalSettings';

// ----------------------------------------------------------------------------

export default {
  name: 'ControlsDrawer',
  components: {
    Datasets,
    EditTools,
    GlobalSettings,
  },
  data() {
    return {
      activeTab: 0,
    };
  },
};
