import { makePottery } from "../src/scripts/PotteryWheel.js"
import { firePottery } from "../src/scripts/Kiln.js"
import { usePottery, toSellOrNotToSell } from "../src/scripts/PotteryCatalog.js"

let piece = null

beforeAll(() => {
    piece = makePottery("Mug", 10, 8)
})

test('Pottery object is created with correct properties', () => {
    expect(
        piece
    )
        .toMatchObject(
            { shape: "Mug", weight: 10, height: 8, id: 1 }
        )
})

describe('Firing the pottery in the kiln that is too hot', () => {
    beforeAll(() => {
        piece = firePottery(piece, 2300)
    })

    test('Pottery object is cracked when temperature is above 2200', () => {
        expect( piece.cracked ).toBe( true )
    })

    test('Pottery marked as fired after going in the kiln', () => {
        expect( piece.fired ).toBe( true )
    })
})


describe('Firing the pottery in the kiln with the correct temperate', () => {
    beforeAll(() => {
        piece = firePottery(piece, 2100)
    })

    test('Pottery object is uncracked when temperature is below 2200', () => {
        expect( piece.cracked ).toBe( false )
    })

    test('Pottery marked as fired after going in the kiln', () => {
        expect( piece.fired ).toBe( true )
    })
})

describe('Do not sell cracked pottery', () => {
    let catalog = []

    beforeAll(() => {
        piece = firePottery(piece, 2300)
        toSellOrNotToSell(piece)
        catalog = usePottery()
    })

    test('Piece is not priced when cracked', () => {
        expect( "price" in piece ).toBe( false )
    })

    test('Not in array of items to sell when cracked', () => {
        expect( catalog.length ).toBe( 0 )
    })
})

describe('Sell uncracked pottery', () => {
    let catalog = []

    beforeAll(() => {
        piece = firePottery(piece, 2000)
        toSellOrNotToSell(piece)
        catalog = usePottery()
    })

    test('Piece is priced when not cracked', () => {
        expect( "price" in piece ).toBe( true )
        expect( piece.price ).toBe( 40 )
    })

    test('In array of items to sell when uncracked', () => {
        expect( catalog.length ).toBe( 1 )
    })

    test('Piece has correct price', () => {
        expect( piece.price ).toBe( 40.00 )
    })
})






