import { checkForUrl } from "../src/client/js/urlChecker";

test('should return false when the Url is not complete (missing the Protocol)', () => {
    expect(checkForUrl('www.google.com')).toBe(false);
})


