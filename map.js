
module.exports = [
	{
		id: "olimpiadas-matematica",
		name: "Olimpíadas de Matemática",
		file: "olimpiadas/matematica/main.md",
		labId: "mathematics",
		contributors: ["5438837184f3440200279afe", "53c84babe041df02002f30ed", "5320fd8ab6172102003081b9", "5321477b2816f6020050cb90", "5397b21e5c86f602009aa558"],
		children: [
			{
				id: "introducao",
				name: "Introdução a Olimpíadas de Matemática",
				file: "olimpiadas/matematica/introducao.md",
				children: [],
			},
			{
				id: "estudo",
				name: "Planos de Estudo",
				file: "olimpiadas/matematica/estudo.md",
				children: [
					{
						id: "nivel1",
						name: "Nível 1 (6º e 7º ano)",
						file: "olimpiadas/matematica/estudo.nivel1.md",
					},
					{
						id: "nivel2",
						name: "Nível 2 (8º e 9º ano)",
						file: "olimpiadas/matematica/estudo.nivel2.md",
					},
					{
						id: "nivel3",
						name: "Nível 3 (Ensino Médio)",
						file: "olimpiadas/matematica/estudo.nivel3.md",
					},
					{
						id: "obm-u",
						name: "OMB - Nível Universitário",
						file: "olimpiadas/matematica/estudo.obm-u.md",
					},
					{
						id: "internacionais",
						name: "Olimpíadas Internacionais",
						file: "olimpiadas/matematica/estudo.internacionais.md",
					},
				],
			},
			{
				id: "fontes",
				name: "Fontes de Conteúdo",
				file: "olimpiadas/matematica/fontes-de-conteudo.md",
				children: [
					{
						id: "aops",
						name: "Art of Problem Solving",
						file: "olimpiadas/matematica/fontes-de-conteudo.aops.md",
					},
					{
						id: "poti",
						name: "POTI",
						file: "olimpiadas/matematica/fontes-de-conteudo.poti.md",
					},
					{
						id: "eureka",
						name: "Eureka!",
						file: "olimpiadas/matematica/fontes-de-conteudo.eureka.md",
						notes: "olimpiadas/matematica/fontes-de-conteudo.eureka.notes.md",
					},
					{
						id: "excalibur",
						name: "Mathematical Excalibur",
						file: "olimpiadas/matematica/fontes-de-conteudo.excalibur.md",
					},
				],
			},
			{
				id: "acervo",
				name: "Acervo de Competições",
				file: "olimpiadas/matematica/acervo.md",
				children: [
					{
						id: "obm",
						name: "Olimpíada Brasileira de Matemática (OBM)",
						file: "olimpiadas/matematica/acervo.obm.md",
					},
					{
						id: "obmep",
						name: "Olimpíada Brasileira de Matemática das Escolas Públicas (OBMEP)",
						file: "olimpiadas/matematica/acervo.obmep.md",
					},
					{
						id: "imo",
						name: "Olimpíada Internacional de Matemática (IMO)",
						file: "olimpiadas/matematica/acervo.imo.md",
						notes: "olimpiadas/matematica/acervo.imo.notes.md",
					},
				],
			},
		],
	},
	{
		id: "olimpiadas-fisica",
		name: "Olimpíadas de Física",
		labId: "physics",
		file: "olimpiadas/fisica/main.md",
		contributors: ["5397b21e5c86f602009aa558", "5320fd8ab6172102003081b9"],
		children: [
			{
				id: "plano-de-estudo",
				name: "Plano de Estudos",
				file: "olimpiadas/fisica/estudo.md",
				children: [],
			},
			{
				id: "conteudo",
				name: "Conteúdo das Provas",
				file: "olimpiadas/fisica/conteudo.md",
				children: [],
			},
			{
				id: "acervo",
				name: "Acervo de Competições",
				file: "olimpiadas/fisica/acervo.md",
				children: [
					{
						id: "obf",
						name: "Olimpíada Brasileira de Física (OBF)",
						file: "olimpiadas/fisica/acervo.obf.md",
					},
					{
						id: "obfep",
						name: "Olimpíada Brasileira de Física das Escolas Públicas (OBFEP)",
						file: "olimpiadas/fisica/main.md",
					},
				],
			},
		],
	},
	{
		id: "application",
		name: "Application",
		file: "application/main.md",
		contributors: ["5321477b2816f6020050cb90", "5320fd8ab6172102003081b9", "5368f4b91e35a902003ca1f7"],
		labId: "application",
		authorHTML: "<a href=\"http://facebook.com/picoBrasil\">Conteúdo original <div class=\"author\">Pico Educacional</div></a>",
		children: [
			{
				id: "estrutura",
				name: "Estrutura Acadêmica nos EUA",
				file: "application/estrutura.md",
				children: [],
			},
			{
				id: "high-school",
				name: "High School",
				file: "application/high-school.md",
				children: [],
			},
			{
				id: "graduacao",
				name: "Graduação",
				file: "application/graduacao.md",
				children: [
					{
						id: "associates",
						name: "Associates",
						file: "application/graduacao.associates.md",
					},
					{
						id: "community-college",
						name: "Community College",
						file: "application/graduacao.community-college.md",
					},
					{
						id: "bachelors",
						name: "Bachelors",
						file: "application/graduacao.bachelors.md",
					},
				],
			},
			{
				id: "pos-graduacao",
				name: "Pós-graduação",
				file: "application/pos.md",
				children: [
					{
						id: "pos-medicina",
						name: "Pós em Medicina",
						file: "application/pos.medicina.md",
					},
				],
			},
			{
				id: "admissions",
				name: "Admissions",
				file: "application/admissions.md",
				children: [
					{
						id: "conceito",
						name: "Conceito – Holistic Admissions",
						file: "application/admissions.conceito.md",
					},
					{
						id: "fatores",
						name: "Fatores",
						file: "application/admissions.fatores.md",
					},
					{
						id: "historico-escolar",
						name: "Histórico Escolar",
						file: "application/admissions.historico.md",
					},
				],
			},
			{
				id: "provas",
				name: "Provas Internacionais de Admissão",
				file: "application/provas.md",
				children: [
					{
						id: "sat",
						name: "SAT",
						file: "application/provas.sat.md",
					},
					{
						id: "sat2",
						name: "SAT II",
						file: "application/provas.sat2.md",
					},
					{
						id: "act",
						name: "ACT",
						file: "application/provas.act.md",
					},
				],
			},
			{
				id: "provas-ingles",
				name: "Provas de Capacidade de Ingles",
				file: "application/provas-ingles.md",
				children: [],
			},
			{
				id: "assistencia",
				name: "Assistencia Financeira",
				file: "application/assistencia.md",
				children: [
					{
						id: "work-study",
						name: "Work-study",
						file: "application/assistencia.work-study.md",
					},
					{
						id: "emprestimos",
						name: "Empréstimos",
						file: "application/assistencia.emprestimos.md",
					},
					{
						id: "crowdfunding",
						name: "Crowd Funding",
						file: "application/assistencia.crowdfunding.md",
					},
				],
			},
			{
				id: "custos",
				name: "Gastos",
				children: [
					{
						id: "apply",
						name: "Custos de Application",
						file: "application/custos.apply.md",
					},
					{
						id: "faculdade",
						name: "Custos da Faculdade",
						file: "application/custos.faculdade.md",
					},
				],
			},
			{
				id: "fontes-de-conteudo",
				name: "Fontes de Conteúdo",
				children: [
					{
						id: "sparknotes",
						name: "Sparknotes",
						file: "application/fontes-de-conteudo.spark.md",
					},
				],
			},
		],
	},
	{
		id: "transfer",
		name: "Transfer Application",
		labId: "application",
		file: "transfer/main.md",
		contributors: ["5418fad69b6ed60200b3037a", "5320fd8ab6172102003081b9"],
		authorHTML: "<a href=\"http://www.qilabs.org/@filipeperes\">Conteúdo original <div class=\"author\">Filipe Peres</div></a>",
		_author: "5418fad69b6ed60200b3037a",
		background: "http://i.imgur.com/zuFpeZc.jpg",
		children: [
			{
				id: "posso-aplicar",
				name: "Eu posso aplicar?",
				file: "transfer/posso-aplicar.md",
			},
			{
				id: "financial-aid",
				name: "Financial aid",
				file: "transfer/financial-aid.md",
			},
			{
				id: "para-onde-aplicar",
				name: "Escolhendo para onde aplicar",
				file: "transfer/para-onde-aplicar.md",
			},
			{
				id: "common-app",
				name: "Common Application (Common App)",
				file: "transfer/common-app.md",
			},
			{
				id: "testes",
				name: "Os testes padronizados",
				file: "transfer/testes.md",
			},
			{
				id: "gpa",
				name: "O GPA",
				file: "transfer/gpa.md",
			},
			{
				id: "carta-recomendacao",
				name: "Cartas de recomendação",
				file: "transfer/carta-recomendacao.md",
			},
			{
				id: "essays",
				name: "Essays",
				file: "transfer/essays.md",
			},
			{
				id: "entrevistas",
				name: "Entrevistas",
				file: "transfer/entrevistas.md",
			},
			{
				id: "midterm-report",
				name: "Midterm report",
				file: "transfer/midterm-report.md",
			},
			{
				id: "credit",
				name: "Transfer of credit",
				file: "transfer/credit.md",
			},
		],
	},
	{
		id: "vestibular",
		name: "Vestibular",
		file: "vestibular/main.md",
		labId: 'vestibular',
		contributors: ["5320fd8ab6172102003081b9"],
		children: [
			{
				id: "exames-unificados",
				name: "Exames Unificados",
				file: "vestibular/exames-unificados.md",
				children: [
					{
						id: "enem",
						name: "ENEM",
						file: "vestibular/exames-unificados.enem.md",
					},
					{
						id: "fuvest",
						name: "FUVEST",
						file: "vestibular/exames-unificados.fuvest.md",
					},
					{
						id: "unicamp",
						name: "UNICAMP",
						file: "vestibular/exames-unificados.unicamp.md",
					},
				],
			},
			{
				id: "preparacao-para-provas",
				name: "Preparação Para As Provas",
				file: "vestibular/preparacao-para-provas.md",
				children: [
					{
						id: "cursinhos",
						name: "Cursinhos",
						file: "vestibular/preparacao-para-provas.cursinhos.md",
					},
					{
						id: "estudando-em-casa",
						name: "Estudando em Casa",
						file: "vestibular/preparacao-para-provas.estudando-casa.md",
					},
					{
						id: "provas-antigas",
						name: "Provas Antigas & Conteúdo Cobrado",
						file: "vestibular/preparacao-para-provas.provas-antigas.md",
					},
					{
						id: "sites-uteis",
						name: "Sites Úteis",
						file: "vestibular/preparacao-para-provas.sites-uteis.md",
					},
				],
			},
			{
				id: "cronograma",
				name: "Cronograma",
				file: "vestibular/cronograma.md",
				children: [
					{
						id: "durante-o-ano",
						name: "Durante o Ano",
						file: "vestibular/cronograma.durante-o-ano.md",
					},
					{
						id: "semana-do-exame",
						name: "Na Semana do Exame",
						file: "vestibular/cronograma.semana-do-exame.md",
					},
					{
						id: "dia-anterior",
						name: "No Dia Anterior",
						file: "vestibular/cronograma.dia-anterior.md",
					},
					{
						id: "dia-do-exame",
						name: "No Dia do Exame",
						file: "vestibular/cronograma.dia-do-exame.md",
					},
				],
			},
			{
				id: "resultados-e-matricula",
				name: "Resultados e Matrícula",
				file: "vestibular/resultados-e-matricula.md",
				children: [
					{
						id: "classificacao-e-reclassificacao",
						name: "Classificação e Reclassificação",
						file: "vestibular/resultados-e-matricula.classificacao-e-reclassificacao.md",
					},
					{
						id: "matricula",
						name: "Matrícula",
						file: "vestibular/resultados-e-matricula.matricula.md",
					},
					{
						id: "cotas",
						name: "Cotas",
						file: "vestibular/resultados-e-matricula.cotas.md",
					},
					{
						id: "sisu",
						name: "SISU",
						file: "vestibular/resultados-e-matricula.sisu.md",
					},
					{
						id: "prouni",
						name: "Prouni",
						file: "vestibular/resultados-e-matricula.prouni.md",
					},
					{
						id: "fies",
						name: "Fies",
						file: "vestibular/resultados-e-matricula.fies.md",
					},
				],
			},
		],
	}
]
