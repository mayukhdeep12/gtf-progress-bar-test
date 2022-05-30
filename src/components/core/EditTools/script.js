import PaintTool from 'rediminds-cta/src/components/tools/PaintTool';
import MeasurementTools from 'rediminds-cta/src/components/tools/MeasurementTools';
import CropTool from 'rediminds-cta/src/components/tools/CropTool';
import MedianFilter from 'rediminds-cta/src/components/tools/MedianFilter';

// ----------------------------------------------------------------------------

export default {
  name: 'EditTools',
  components: {
    PaintTool,
    MeasurementTools,
    CropTool,
    MedianFilter,
  },
  data() {
    return {
      enabledTool: '',
    };
  },
  methods: {
    setEnabledTool(tool, flag) {
      this.enabledTool = flag ? tool : '';
    },
  },
};
