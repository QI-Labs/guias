
module.exports =  {
	"olimpiadas-matematica": {
		name: "Olimpíadas de Matemática",
		icon: 'icon-circle-compass',
		file: "olimpiadas/matematica/main.md",
		contributors: ['53c84babe041df02002f30ed' , '5320fd8ab6172102003081b9', '5321477b2816f6020050cb90', '5397b21e5c86f602009aa558'],
		children: {
			"introducao": {
				name: "Introdução a Olimpíadas de Matemática",
				file: "olimpiadas/matematica/introducao.md",
				children: {
				}
			},
			"estudo": {
				name: "Planos de Estudo",
				file: "olimpiadas/matematica/estudo.md",
				children: {
					"nivel1": {
						name: "Nível 1 (6º e 7º ano)",
						file: "olimpiadas/matematica/estudo.nivel1.md",
					},
					"nivel2": {
						name: "Nível 2 (8º e 9º ano)",
						file: "olimpiadas/matematica/estudo.nivel2.md",
					},
					"nivel3": {
						name: "Nível 3 (Ensino Médio)",
						file: "olimpiadas/matematica/estudo.nivel3.md",
					},
					"internacionais": {
						name: "Olimpíadas Internacionais",
						file: "olimpiadas/matematica/estudo.internacionais.md",
					},
				}
			},
			"fontes": {
				name: "Fontes de Conteúdo",
				file: "olimpiadas/matematica/fontes-de-conteudo.md",
				children: {
					"aops": {
						name: "Art of Problem Solving",
						file: "olimpiadas/matematica/fontes-de-conteudo.aops.md",
					},
					"poti": {
						name: "POTI",
						file: "olimpiadas/matematica/fontes-de-conteudo.poti.md",
					},
					"eureka": {
						name: "Eureka!",
						file: "olimpiadas/matematica/fontes-de-conteudo.eureka.md",
						notes: "olimpiadas/matematica/fontes-de-conteudo.eureka.notes.md",
					},
					"excalibur":{
						name: "Mathematical Excalibur",
						file: "olimpiadas/matematica/fontes-de-conteudo.excalibur.md",
					},
				},
			},
			acervo: {
				name: "Acervo de Competições",
				file: "olimpiadas/matematica/acervo.md",
				children: {
					"obm": {
						name: "Olimpíada Brasileira de Matemática (OBM)",
						file: "olimpiadas/matematica/acervo.obm.md",
					},
					"obmep": {
						name: "Olimpíada Brasileira de Matemática das Escolas Públicas (OBMEP)",
						file: "olimpiadas/matematica/acervo.obmep.md",
					},
					"imo": {
						name: "Olimpíada Internacional de Matemática (IMO)",
						file: "olimpiadas/matematica/acervo.imo.md",
						notes: "olimpiadas/matematica/acervo.imo.notes.md",
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
				file: "olimpiadas/fisica/acervo.md",
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
	application: {
		name: "Application",
		file: "application/main.md",
		contribuitors: ['5368f4b91e35a902003ca1f7'],
		children: {
			"estrutura": {
				name: "Estrutura Acadêmica nos EUA",
				file: "application/estrutura.md",
				children: {
				}
			},
			"graduacao": {
				name: "Graduação",
				file: "application/graduacao.md",
				children: {
				}
			},
			"pos-medicina": {
				name: "Pós-graduação - Medicina",
				file: "application/pos.medicina.md",
				children: {
				}
			},
			"admissions": {
				name: "Admissions",
				file: "application/admissions.md",
				children: {
					"provas": {
						name: "Provas Internacionais de Admissão",
						file: "application/admissions.provas.md",
					},
					"english": {
						name: "Provas de Capacidade de Inglês",
						file: "application/admissions.english.md",
					}
				}
			},
			"assistencia": {
				name: "Assistencia Financiera",
				file: "application/assistencia.md",
				children: {
					"work-study": {
						name: "Work-study",
						file: "application/assistencia.work-study.md",
					},
					"emprestimos": {
						name: "Empréstimos",
						file: "application/assistencia.emprestimos.md",
					},
					"croudfunding": {
						name: "Crowd Funding",
						file: "application/assistencia.croudfunding.md",
					},
				}
			},
			"custos": {
				name: "Gastos",
				file: "application/custos.md",
				children:{
					"apply": {
						name: "Custos de Application",
						file: "application/custos.apply.md",
					},
					"faculdade": {
						name: "Custos da Faculdade",
						file: "application/custos.faculdade.md",
					}
				}
			}
		}
	},
	vestibular: {
		name: "Vestibular",
		icon: 'icon-university',
		file: "vestibular/main.md",
		contributors: ['5320fd8ab6172102003081b9'],
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

}
