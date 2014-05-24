
module.exports =  {
	vestibular: {
		name: "Vestibular",
		color: "red",
		file: "text/vestibular/main.md",
		children: {
			"exames-unificados": {
				name: "Exames Unificados",
				file: "text/vestibular/exames-unificados.md",
				children: {
					"enem": {
						file: "text/vestibular/exames-unificados-enem.md",
					}
				}
			}
		}
	},
}