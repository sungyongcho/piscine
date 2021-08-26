{
  "compilerOptions": {
    "target": "es2021", // 컴파일 후 생성될 파일의 ECMAScript 버전
      "module": "commonjs", // 컴파일 후 생성될 파일이 사용하는 모듈 버전
        "outDir": "dist/", // 파일이 생성될 폴더
          "esModuleInterop": true, // 'require'와 'import' 호환
            "strict": true /* Enable all strict type-checking options. */,
              "skipLibCheck": true /* Skip type checking of declaration files. */,
                "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
  }
  //   "include": ["./src/*.ts", "./src/routes/*.ts"],
  //   "exclude": ["./dist/"]
}
