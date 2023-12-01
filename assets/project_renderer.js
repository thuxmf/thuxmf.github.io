// Functions.

function render_project(project_name,
    figure_path,
    title_name,
    author_list,
    material_list,
    award_name=null) {
if (document.getElementsByName(project_name).length === 0) {
return;
}

var img = document.createElement('img');
img.src = figure_path;
img.setAttribute('style',
 'width: 100%; max-height: 100px; object-fit: cover;');

var title = document.createElement('div');
title.setAttribute('class', 'title');
title.innerHTML = title_name;

var author = document.createElement('div');
author.setAttribute('class', 'author');
author.innerHTML = '';
for (var idx = 0; idx < author_list.length; idx++) {
if (idx < author_list.length - 1 &&
(author_list[idx + 1] == 'equal' ||
author_list[idx + 1] == 'corresponding')) {
author.innerHTML += (
'<span name="' +
author_list[idx] +
'" title="' +
author_list[idx + 1] +
'"></span>');
idx++
} else {
author.innerHTML += (
'<span name="' +
author_list[idx] +
'" title="' +
'"></span>');
}
if (idx < author_list.length - 1) {
author.innerHTML += ', ';
}
}

var material = document.createElement('div');
material.setAttribute('class', 'material');
material_list.innerHTML = '';
for (var idx = 0; idx < material_list.length; idx++) {
material.innerHTML += (
'<a href="' +
material_list[idx][1] +
'" target="_blank">' +
material_list[idx][0] +
'</a>');
if (idx < material_list.length - 1) {
material.innerHTML += ' / ';
}
}

if (award_name) {
var award = document.createElement('div');
award.setAttribute('class', 'award');
award.innerHTML = award_name;
}

var row = document.getElementsByName(project_name)[0];
var cell = row.insertCell(0);
cell.setAttribute('width', '25%');
cell.appendChild(img);
cell = row.insertCell(1);
cell.appendChild(title);
cell.appendChild(author);
cell.appendChild(material);
if (award_name) {
cell.appendChild(award);
}
};

function render_author(author_name, link=null, alias=null) {
var list = document.getElementsByName(author_name);
for (var idx = 0; idx < list.length; idx++) {
var contribution = list[idx].title;
var tailing = '';
if (contribution === 'equal') {
tailing = '*';
} else if (contribution === 'corresponding') {
tailing = '<sup>+<sup>';
}

var context = ''
if (alias) {
context = alias + tailing;
} else {
context = author_name + tailing;
}

if (link) {
list[idx].innerHTML = (
'<a href="' +
link +
'" target="_blank">' +
context +
'</a>');
} else {
list[idx].innerHTML = context;
}

if (author_name === 'Mengfei Xia') {
list[idx].setAttribute('class', 'me')
}
}
};










// Template.

render_project(
project_name='template',
figure_path='./assets/projects/',
title_name='',
author_list=[
'',
],
material_list=[
['Paper', ''],
['Project', ''],
['Code', ''],
['Demo', ''],
],
award_name=null,
);










// Projects.

render_project(
project_name='DPM-Aligner',
figure_path='./assets/projects/dpm-aligner.jpg',
title_name='Towards More Accurate Diffusion Model Acceleration with A Timestep Aligner',
author_list=[
'Mengfei Xia',
'Yujun Shen',
'Changsong Lei',
'Yu Zhou',
'Ran Yi',
'Deli Zhao',
'Wenping Wang',
'Yong-Jin Liu', 'corresponding',
],
material_list=[
['arXiv', 'https://arxiv.org/pdf/2310.09469.pdf'],
],
award_name=null,
);


render_project(
project_name='APDrawingGAN2',
figure_path='./assets/projects/apdrawinggan2.jpg',
title_name='Line Drawings for Face Portraits from Photos using Global and Local Structure based GANs',
author_list=[
'Ran Yi',
'Mengfei Xia',
'Yong-Jin Liu',
'Yu-Kun Lai',
'Paul L. Rosin',
],
material_list=[
['TPAMI', 'https://ieeexplore.ieee.org/document/9069416'],
['Code', 'https://github.com/yiranran/APDrawingGAN2'],
],
award_name=null,
);


render_project(
project_name='FEditNet',
figure_path='./assets/projects/feditnet.png',
title_name='FEditNet: Few-Shot Editing of Latent Semantics in GAN Spaces',
author_list=[
'Mengfei Xia',
'Yezhi Shu',
'Yuji Wang',
'Yu-Kun Lai',
'Qiang Li',
'Pengfei Wan',
'Zhongyuan Wang',
'Yong-Jin Liu', 'corresponding',
],
material_list=[
['AAAI', 'https://ojs.aaai.org/index.php/AAAI/article/view/25394'],
['Code', 'https://github.com/THU-LYJ-Lab/FEditNet'],
],
award_name=null,
);


render_project(
project_name='SMaRt',
figure_path='./assets/projects/smart.png',
title_name='SMaRt: Improving GANs with Score Matching Regularity',
author_list=[
'Mengfei Xia',
'Yujun Shen',
'Ceyuan Yang',
'Ran Yi',
'Wenping Wang',
'Yong-Jin Liu', 'corresponding',
],
material_list=[
['arXiv', 'https://arxiv.org/pdf/2311.18208.pdf'],
],
award_name=null,
);










// Authors.

render_author('Ceyuan Yang', 'https://ceyuan.me/');
render_author('Changsong Lei');
render_author('Deli Zhao', 'https://zhaodeli.github.io/');
render_author('Mengfei Xia');
render_author('Paul L. Rosin', 'https://users.cs.cf.ac.uk/Paul.Rosin/')
render_author('Pengfei Wan', 'https://scholar.google.com/citations?user=P6MraaYAAAAJ')
render_author('Qiang Li', 'https://sites.google.com/site/utsqiangli2/')
render_author('Ran Yi', 'https://yiranran.github.io/');
render_author('Wenping Wang', 'https://scholar.google.com/citations?user=28shvv0AAAAJ');
render_author('Yezhi Shu', 'https://scholar.google.com/citations?user=ItEyqMAAAAAJ')
render_author('Yong-Jin Liu', 'https://cg.cs.tsinghua.edu.cn/people/~Yongjin/Yongjin.htm');
render_author('Yu Zhou');
render_author('Yuji Wang')
render_author('Yujun Shen', 'https://shenyujun.github.io/');
render_author('Yu-Kun Lai', 'https://users.cs.cf.ac.uk/Yukun.Lai/')
render_author('Zhongyuan Wang', 'https://scholar.google.com/citations?user=4XVJrRAAAAAJ')