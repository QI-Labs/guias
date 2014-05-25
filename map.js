
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
						file: "vestibular/exames-unificados.enem.md",
					},
					"fuvest": {
						file: "vestibular/exames-unificados.fuvest.md",
					},
					"unicamp": {
						file: "vestibular/exames-unificados.unicamp.md",
					}
				}
			},
			"preparacao-para-provas": {
				name: "Preparação Para As Provas",
				file: "vestibular/preparacao-para-provas.md",
				children: {
				}
			}
		}
	},
}
