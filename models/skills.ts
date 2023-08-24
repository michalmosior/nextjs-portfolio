import { Schema, model, models } from 'mongoose';
import { Skill } from '@/types/types';

const SkillSchema = new Schema<Skill>({
	title: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
});

const Skill = models.Skill || model('Skill', SkillSchema);

export default Skill;
