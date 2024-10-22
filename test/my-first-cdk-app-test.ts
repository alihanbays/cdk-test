import { handler } from "../src";
describe('My First CDK App Tests', () => {
    it('returns name and test', async() => {
        const output = await handler({ name: 'Alihan '});
        expect(output).toStrictEqual('Good Job Alihan')
    });
    it('returns no name and test', async() => {
        const output = await handler({ name: ''});
        expect(output).toStrictEqual('Good Job')
    });
});