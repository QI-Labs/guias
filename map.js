
module.exports =  {
	vestibular: {
		name: "Vestibular",
		color: "red",
		file: "vestibular/main.md",
		children: {
			"exames-unificados": {
				name: "Exames Unificados",
				file: "vestibular/exames-unificados.md",
				children: {
					"enem": {
						name: "ENEM",
						file: "vestibular/exames-unificados.enem.md",
					},
					"fuvest": {
						name: "FUVEST",
						file: "vestibular/exames-unificados.fuvest.md",
					},
					"unicamp": {
						name: "UNICAMP",
						file: "vestibular/exames-unificados.unicamp.md",
					}
				}
			},
			"preparacao-para-provas": {
				name: "Preparação Para As Provas",
				file: "vestibular/preparacao-para-provas.md",
				children: {
					"cursinhos": {
						name: "Cursinhos",
						file: "vestibular/preparacao-para-provas.cursinhos.md",
					},
					"estudando-em-casa": {
						name: "Estudando em Casa",
						file: "vestibular/preparacao-para-provas.estudando-casa.md",
					},
					"provas-antigas": {
						name: "Provas Antigas & Conteúdo Cobrado",
						file: "vestibular/preparacao-para-provas.provas-antigas.md",
					},
					"sites-uteis": {
						name: "Sites Úteis",
						file: "vestibular/preparacao-para-provas.sites-uteis.md",
					}
				}
			},
			"cronograma": {
				name: "Cronograma",
				file: "vestibular/cronograma.md",
				children: {
					"durante-o-ano": {
						name: "Durante o Ano",
						file: "vestibular/cronograma.durante-o-ano.md",
					},
					"semana-do-exame": {
						name: "Na Semana do Exame",
						file: "vestibular/cronograma.semana-do-exame.md",
					},
					"dia-anterior": {
						name: "No Dia Anterior",
						file: "vestibular/cronograma.dia-anterior.md",
					},
					"dia-do-exame": {
						name: "No Dia do Exame",
						file: "vestibular/cronograma.dia-do-exame.md",
					}
				}
			},
			"resultados-e-matricula": {
				name: "Resultados e Matrícula",
				file: "vestibular/resultados-e-matricula.md",
				children: {
					"classificacao-e-reclassificacao": {
						name: "Classificação e Reclassificação",
						file: "vestibular/resultados-e-matricula.classificacao-e-reclassificacao.md",
					},
					"matricula": {
						name: "Matrícula",
						file: "vestibular/resultados-e-matricula.matricula.md",
					},
					"cotas": {
						name: "Cotas",
						file: "vestibular/resultados-e-matricula.cotas.md",
					},
					"sisu": {
						name: "SISU",
						file: "vestibular/resultados-e-matricula.sisu.md",
					},
					"prouni": {
						name: "Prouni",
						file: "vestibular/resultados-e-matricula.prouni.md",
					},
					"fies": {
						name: "Fies",
						file: "vestibular/resultados-e-matricula.fies.md",
					}
				}
			}
		}
	},
}
