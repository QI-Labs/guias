
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
						file: "vestibular/exames-unificados-enem.md",
					}
				}
			}
		}
	},
}
