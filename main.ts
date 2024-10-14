// 以下を参考にして作成
// [TypeScriptのASTを使ってコードを解析しよう](https://qiita.com/kodo_san/items/12e83c3058ea151eb61a)
import * as ts from 'typescript'

let program = ts.createProgram(['./src/index.ts'], { allowJs: true });
let sourceFile = program.getSourceFile('./src/index.ts');

ts.forEachChild(sourceFile!, each);

function each(node: ts.Node) {
    switch (node.kind) {
        case ts.SyntaxKind.ClassDeclaration:
            classDeclaration(<ts.ClassDeclaration>node);
            break;
        default:
            next();

    }

    function next()   {
            ts.forEachChild(node, each);
    }

}

function classDeclaration(node: ts.ClassDeclaration) {
  console.log(node.name?.text);
}
