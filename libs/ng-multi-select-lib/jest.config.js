module.exports = {
  name: 'ng-multi-select-lib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ng-multi-select-lib',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
