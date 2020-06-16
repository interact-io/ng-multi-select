module.exports = {
  name: 'multi-select-demo-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/multi-select-demo-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
