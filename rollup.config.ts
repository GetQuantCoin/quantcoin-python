import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default 
{
  input: `src/index.ts`,
  output: [
    {file: 'dist/starboard-python.js', format: 'es'}
  ],
  plugins: [
    typescript({
      include: [
          './src/*.ts',
      ],
      useTsconfigDeclarationDir: true
    }),
    resolve(),
    commonjs(),
  ]
}
;