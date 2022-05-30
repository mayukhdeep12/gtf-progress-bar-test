// //Importing 
// import { mapState, mapActions } from 'vuex';

// import SourceSelect from 'rediminds-cta/src/components/widgets/SourceSelect';


// //Defining name
// export default {
//   name: 'ResliceCursor',
//   components: {
//     SourceSelect,
//   },
//   props: ['enabled'],
//   data() {
//     return {
//       targetVolumeId: -1,
//       widgetId: -1,
//       canReset: false,
//     };
//   },
//   computed: {
//     targetVolume() {
//       return this.$proxyManager.getProxyById(this.targetVolumeId);
//     },
//     cursorProxy() {
//       return this.$proxyManager.getProxyById(this.widgetId);
//     },
//     ...mapsState('widgets', {
//       allCursorStates: 'cursorStates',
//     })
//   },
//   watch: {
//     enabled(enabled) {
//       if (enabled) {
//         const cursorFilter = this.getCursorFilter(this.targetVolume);

//         let cursorProxy = this.cursorProxy;
//         if (!cursorProxy) {
//           cursorProxy = this.$proxyManager
//             .getProxyInGroup('Widgets')
//             .find((w) => w.getProxyName() === 'Cursor');
//           if (!cursorProxy) {
//             cursorProxy = this.$proxyManager.createProxy('Widgets', 'Cursor');
//           }
//           this.widgetId = cursorProxy.getProxyId();
//         }

//         const widget = cursorProxy.getWidget();
//         const widgetState = cursorProxy.getWidgetState();

//         if (cursorFilter.isResetAvailable()) {
//           /**
//            * Return the reslice cursor matrix built as such: [YZ, XZ, XY, center]
//           */
//           const state = widgetState.ResetResliceCursor();
//           state.setPlanes(cursorFilter.ResetResliceCursor()); //getResliceMatrix
//         }

//         const ResliceState = widgetState.getResliceMatrix();
//         this.statesub.sub(
//           ResliceState.
//         );
//       }
//     }
//   },
// };
