
export const firePottery = (p, t) => {
    p.fired = true

    if (t > 2200) {
        p.cracked = true
    }
    else {
        p.cracked = false
    }
	return p
}

