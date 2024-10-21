"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event) => {
    const result = event.name ? `Good Job ${event.name}!` : 'Good Job';
    return result;
};
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBTyxNQUFNLE9BQU8sR0FBRyxLQUFLLEVBQUUsS0FBdUIsRUFBRSxFQUFFO0lBQ3JELE1BQU0sTUFBTSxHQUFXLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUE7SUFDMUUsT0FBTyxNQUFNLENBQUE7QUFDakIsQ0FBQyxDQUFBO0FBSFksUUFBQSxPQUFPLFdBR25CIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBhc3luYyAoZXZlbnQ6IHsgbmFtZTogc3RyaW5nIH0pID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nID0gZXZlbnQubmFtZSA/IGBHb29kIEpvYiAke2V2ZW50Lm5hbWV9IWAgOiAnR29vZCBKb2InXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn0iXX0=