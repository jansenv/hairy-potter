let id = 1

export const makePottery = (shape, weight, height) => {
	return { shape, weight, height, id: id++ }
}

