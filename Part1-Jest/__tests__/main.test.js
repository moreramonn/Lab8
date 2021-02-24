const formatVolumeIconPath = require('../assets/scripts/main');

describe('testVolumeIconPath', () => {
    test('volume > 66', () => {
        expect(formatVolumeIconPath(99)).toContain('3');
        expect(formatVolumeIconPath(99)).toMatch('./assets/media/icons/volume-level-3.svg');
    });

    test('volume > 33 && <= 66', () => {
        expect(formatVolumeIconPath(66)).toContain('2');
        expect(formatVolumeIconPath(66)).toMatch('./assets/media/icons/volume-level-2.svg');
    });

    test('volume > 0 && <= 33', () => {
        expect(formatVolumeIconPath(33)).toContain('1');
        expect(formatVolumeIconPath(33)).toMatch('./assets/media/icons/volume-level-1.svg');
    });

    test('no volume', () => {
        expect(formatVolumeIconPath(0)).toContain('0');
        expect(formatVolumeIconPath(0)).toMatch('./assets/media/icons/volume-level-0.svg');
    });
});