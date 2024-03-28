import dateToEpoch from "../../../src/helpers/dateToEpoch";

describe("dateToEpoch helper testing", () => {
    it("should return epoch at ms accuracy", async () => {
        const epoch = dateToEpoch("2014-12-10T15:08:19.848000Z");

        expect(epoch).toBeDefined();
        expect(epoch).toBe(1418224099848);
    });
});
