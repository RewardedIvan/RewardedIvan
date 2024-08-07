export interface Skill {
	name: string;
	icon?: string;
};

export interface SkillGroup {
	name: string;
	items: Skill[];
};

export const skills: SkillGroup[] = [
	{
		name: "webdev",
		items: [
			{ name: "HTML" },
			{ name: "CSS" },
			{ name: "JavaScript" },
			{ name: "TypeScript" },
		]
	},
	{
		name: "frameworks",
		items: [
			{ name: "Svelte/Kit", icon: "Svelte" },
			{ name: "React" },
		]
	},
	{
		name: "scripting",
		items: [
			{ name: "Bash", icon: "Terminal" },
			{ name: "Batch", icon: "Terminal" },
			{ name: "Lua" },
			{ name: "Luau" },
		]
	},
	{
		name: "tools",
		items: [
			{ name: "Vim" },
			{ name: "Git" },
			{ name: "GNU/Linux", icon: "Kernel" },
			{ name: "Arch" },
		]
	},
	{
		name: "intm",
		items: [
			{ name: "Go" },
			{ name: "Java" },
			{ name: "C#", icon: "CS" },
			{ name: "Python" },
		]
	},
	{
		name: "lowlevel",
		items: [
			{ name: "C" },
			{ name: "C++", icon: "CPP" },
		]
	},
];
