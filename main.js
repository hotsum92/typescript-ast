// 以下を参考にして作成
// [TypeScriptのASTを使ってコードを解析しよう](https://qiita.com/kodo_san/items/12e83c3058ea151eb61a)
import * as ts from 'typescript'

let source = `
 class Sample{

 }

 class Sample2{

 }
`;

let sourceFile = ts.createSourceFile('sample.ts', source, ts.ScriptTarget.ES6, /*setParentNodes */ true);

ts.forEachChild(sourceFile, each);

function each(node) {
    switch (node.kind) {
        case ts.SyntaxKind.ClassDeclaration:
            classDeclaration(node);
            break;
        default:
            next();

    }

    function next()   {
            ts.forEachChild(node, each);
    }

}

function classDeclaration(node) {
  console.log(node.name.text);
}

