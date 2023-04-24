import caesarCipher from "../script/caesarCipher";

test("sumit equal to xzrny",()=>{
    expect(caesarCipher("sumit",5)).toMatch("xzrny")
})

test("sumit equal to vxplw",()=>{
    expect(caesarCipher("sumit",3)).toMatch("vxplw")
})

test("sumit equal to mogcn",()=>{
    expect(caesarCipher("sumit",20)).toMatch("mogcn")
})