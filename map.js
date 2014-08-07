
module.exports =  {
	vestibular: {
		name: "Vestibular",
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
	olimpiadas: {
		name: "Olimpíadas Científicas",
		file: "olimpiadas/main.md",
		children: {
			"olimpiadas-matematica": {
				name: "Olimpíadas de Matemática",
				redirect: "olimpiadas-matematica",
			},
			"olimpiadas-fisica": {
				name: "Olimpíadas de Física",
				redirect: "olimpiadas-fisica",
			},
			"olimpiadas-quimica": {
				name: "Olimpíadas de Química",
				redirect: "olimpiadas-quimica",
			},
			"olimpiadas-informatica": {
				name: "Olimpíadas de Informática",
				redirect: "olimpiadas-informática",
			},
			"olimpiadas-biologia": {
				name: "Olimpíadas de Biologia",
				redirect: "olimpiadas-biologia",
			},
		}
	},
	"olimpiadas-matematica": {
		name: "Olimpíadas de Matemática",
		icon: 'icon-circle-compass',
		file: "olimpiadas/matematica/main.md",
		children: {
			"introducao": {
				name: "Introdução a Olimpíadas de Matemática",
				file: "olimpiadas/matematica/introducao.md",
				children: {
					"niveis": {
						name: "Níveis de Competição",
						file: "olimpiadas/matematica/introducao.niveis.md",
					},
				}
			},
			"topicos": {
				name: "Tópicos de Estudo",
				file: "olimpiadas/matematica/materias.md",
				children: {
					"imo": {
						name: "Olimpíada Internacional (IMO)",
						file: "olimpiadas/matematica/materias.imo.md",
					},
				}
			},
			"fontes": {
				name: "Fontes de conteúdo",
				file: "olimpiadas/matematica/fontes-de-conteudo.md",
				children: {
					"aops": {
						name: "Art of Problem Solving",
						file: "olimpiadas/matematica/fontes-de-conteudo.aops.md",
					},
					"poti": {
						name: "POTI"
						file: "olimpiadas/matematica/fontes-de-conteudo.poti.md"
					},
					"eureka": {
						name: "Eureka!"
						file: "olimpiadas/matematica/fontes-de-conteudo.eureka.md"
					},
			},
			acervo: {
				name: "Acervo de Competições",
				file: "olimpiadas/matematica/acervo.md",
				children: {
					obm: {
						name: "Olimpíada Brasileira de Matemática (OBM)",
						file: "olimpiadas/matematica/acervo.obm.md",
					},
					obmep: {
						name: "Olimpíada Brasileira de Matemática das Escolas Públicas (OBMEP)",
						file: "olimpiadas/matematica/acervo.obmep.md",
					},
					imo: {
						name: "Olimpíada Internacional de Matemática (IMO)",
						file: "olimpiadas/matematica/acervo.imo.md",
					},
				}
			}
		}
	},
	"olimpiadas-fisica": {
		name: "Olimpíadas de Física",
		icon: 'icon-genius',
		file: "olimpiadas/fisica/main.md",
		children: {
			"plano-de-estudo": {
				name: "Plano de Estudos",
				file: "olimpiadas/fisica/main.md",
				children: {
				}
			},
			"conteudo": {
				name: "Conteúdo das Provas",
				file: "olimpiadas/fisica/conteudo.md",
				children: {
				}
			},
			acervo: {
				name: "Acervo de Competições",
				file: "olimpiadas/fisica/main.md",
				children: {
					obf: {
						name: "Olimpíada Brasileira de Física (OBF)",
						file: "olimpiadas/fisica/main.md",
					},
					obfep: {
						name: "Olimpíada Brasileira de Física das Escolas Públicas (OBFEP)",
						file: "olimpiadas/fisica/main.md",
					},
				}
			}
		}
	},
}
