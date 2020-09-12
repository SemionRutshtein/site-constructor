import image from './assets/image.png'
import {TextBlock, TitleBlock, ImageBlock, TextColumnsBlock} from './classes/blocks'
import {css} from "./utils";

const text = `
You can also see my work here: <a href="https://github.com/SemionRutshtein/" target="_blank">Semion Rutshtein</a>. here are collected works that I selected for your further review React, Vue, Angular, Node, JavaScript, Express, Next, Java, Spring
`

export const model = [
    new TitleBlock('Site designer on pure JavaScript!', {
        tag: 'h2',
        styles: css({
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        })
        //styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;'
    }),
    new ImageBlock(image, {
        styles: 'padding: 2rem 0; display: flex; justify-content: center;',
        alt: 'my image',
        imageStyles: 'width: 700px; height: auto;'
    }),
    new TextColumnsBlock([
        'Application on pure JavaScript, with out frameworks',
        'Skill test training SOLID and CCS with JavaScript in one project',
        'JavaScript - real cool language ',
        'Measuring programming progress by lines of code is like measuring aircraft building progress by weight'
    ], {
        styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
    }),
    new TextBlock(text, {
        styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
    })
]
