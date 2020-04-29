const catalog = []

export const usePottery = () => catalog.slice()

export const toSellOrNotToSell = p => {
    if (!p.cracked) {
        if (p.weight >= 6) {
            p.price = 50
        }
        else {
            p.price = 10
        }
        catalog.push(p)
    }


	return p
}

