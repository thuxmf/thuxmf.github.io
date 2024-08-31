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
                     'width: 100%; max-height: 120px; object-fit: cover;');

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

        var context = '';
        if (alias) {
            context = alias + tailing;
        } else {
            context = author_name.replace(' ', '&nbsp;') + tailing;
        }

        if (link) {
            list[idx].innerHTML = (
                '<a href="' +
                link +
                '" target="_blank">' +
                '<span style="white-space:nowrap">' + context + '</span>' +
                '</a>');
        } else {
            list[idx].innerHTML = context;
        }

        if (author_name === 'Mengfei Xia') {
            list[idx].setAttribute('class', 'me');
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
    project_name='DMT',
    figure_path='./assets/projects/dmt.jpg',
    title_name='A Diffusion Model Translator for Efficient Image-to-Image Translation',
    author_list=[
        'Mengfei Xia',
        'Yu Zhou',
        'Ran Yi',
        'Yong-Jin Liu', 'corresponding',
        'Wenping Wang',
    ],
    material_list=[
        ['TPAMI 2024', 'https://ieeexplore.ieee.org/document/10614866'],
        ['Code', 'https://github.com/thuxmf/dmt'],
    ],
    award_name=null,
);


render_project(
    project_name='FEditNet++',
    figure_path='./assets/projects/feditnet++.jpg',
    title_name='FEditNet++: Few-Shot Editing of Latent Semantics in GAN Spaces with Correlated Attribute Disentanglement',
    author_list=[
        'Ran Yi',
        'Teng Hu',
        'Mengfei Xia',
        'Yizhe Tang',
        'Yong-Jin Liu', 'corresponding',
    ],
    material_list=[
        ['TPAMI 2024', 'https://ieeexplore.ieee.org/document/10607942/'],
        ['Code', 'https://github.com/sjtuplayer/FEditNet2'],
    ],
    award_name=null,
);


render_project(
    project_name='GANdance',
    figure_path='./assets/projects/gandance.jpg',
    title_name='Exploring Guided Sampling of Conditional GANs',
    author_list=[
        'Yifei Zhang', 'equal',
        'Mengfei Xia', 'equal',
        'Yujun Shen',
        'Jiapeng Zhu',
        'Ceyuan Yang',
        'Kecheng Zheng',
        'Lianghua Huang',
        'Yu Liu',
        'Fan Cheng', 'corresponding',
    ],
    material_list=[
        ['ECCV 2024', 'https://eccv.ecva.net/virtual/2024/poster/1588'],
        ['Code', 'https://github.com/zyf0619sjtu/GANdance'],
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
        ['ICML 2024', 'https://proceedings.mlr.press/v235/xia24d.html'],
        ['Code', 'https://github.com/thuxmf/SMaRt'],
    ],
    award_name=null,
);


render_project(
    project_name='TADPM',
    figure_path='./assets/projects/tadpm.png',
    title_name='Automatic Tooth Arrangement with Joint Features of Point and Mesh Representations via Diffusion Probabilistic Models',
    author_list=[
        'Changsong Lei',
        'Mengfei Xia',
        'Shaofeng Wang',
        'Yaqian Liang',
        'Ran Yi',
        'Yu-Hui Wen',
        'Yong-Jin Liu', 'corresponding',
    ],
    material_list=[
        ['CAGD 2024', 'https://arxiv.org/pdf/2312.15139v1.pdf']
    ],
    award_name=null,
)


render_project(
    project_name='TimeTuner',
    figure_path='./assets/projects/time-tuner.jpg',
    title_name='Towards More Accurate Diffusion Model Acceleration with A Timestep Tuner',
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
        ['CVPR 2024', 'https://openaccess.thecvf.com/content/CVPR2024/papers/Xia_Towards_More_Accurate_Diffusion_Model_Acceleration_with_A_Timestep_Tuner_CVPR_2024_paper.pdf'],
        ['Code', 'https://github.com/thuxmf/time-tuner'],
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
        ['AAAI 2023', 'https://ojs.aaai.org/index.php/AAAI/article/view/25394'],
        ['Code', 'https://github.com/THU-LYJ-Lab/FEditNet'],
    ],
    award_name=null,
);


render_project(
    project_name='DCK',
    figure_path='./assets/projects/dck.png',
    title_name='Audio-Driven Talking Face Video Generation with Dynamic Convolution Kernels',
    author_list=[
        'Zipeng Ye',
        'Mengfei Xia',
        'Ran Yi',
        'Juyong Zhang',
        'Yu-Kun Lai',
        'Xuwei Huang',
        'Guoxin Zhang',
        'Yong-Jin Liu', 'corresponding',
    ],
    material_list=[
        ['TMM 2022', 'https://arxiv.org/pdf/2201.05986v1'],
    ],
    award_name=null,
);


render_project(
    project_name='3DCariGAN',
    figure_path='./assets/projects/3d_carigan.png',
    title_name='3D-CariGAN: An End-to-End Solution to 3D Caricature Generation from Normal Face Photos',
    author_list=[
        'Zipeng Ye',
        'Mengfei Xia',
        'Yanan Sun',
        'Ran Yi',
        'Minjing Yu',
        'Juyong Zhang',
        'Yu-Kun Lai',
        'Yong-Jin Liu', 'corresponding',
    ],
    material_list=[
        ['TVCG 2021', 'https://ieeexplore.ieee.org/abstract/document/9609545'],
        ['Code', 'https://github.com/qq775193759/3D-CariGAN'],
    ],
    award_name=null,
);


render_project(
    project_name='GAN Survey',
    figure_path='./assets/projects/gan_survey.png',
    title_name='Adversarial Attack and Interpretability of the Deep Neural Network from the Geometric Perspective',
    author_list=[
        'Mengfei Xia',
        'Zipeng Ye',
        'Wang Zhao',
        'Ran Yi',
        'Yong-Jin Liu', 'corresponding',
    ],
    material_list=[
        ['SCIENTIA SINICA Informationis 2021', 'http://scis.scichina.com/cn/2021/SSI-2020-0169.pdf'],
    ],
    award_name=null,
);


render_project(
    project_name='SE3',
    figure_path='./assets/projects/se3.jpg',
    title_name='Efficient SE(3) Reachability Map Generation via Interplanar Integration of Intra-planar Convolutions',
    author_list=[
        'Yiheng Han',
        'Jia Pan',
        'Mengfei Xia',
        'Long Zeng',
        'Yong-Jin Liu', 'corresponding',
    ],
    material_list=[
        ['ICRA 2021', 'https://ieeexplore.ieee.org/document/9561921'],
    ],
    award_name=null,
);


render_project(
    project_name='MSCartoonGAN',
    figure_path='./assets/projects/ms_cartoongan.jpg',
    title_name='GAN-Based Multi-Style Photo Cartoonization',
    author_list=[
        'Yezhi Shu',
        'Ran Yi',
        'Mengfei Xia',
        'Zipeng Ye',
        'Wang Zhao',
        'Yang Chen',
        'Yu-Kun Lai',
        'Yong-Jin Liu', 'corresponding',
    ],
    material_list=[
        ['TVCG 2021', 'https://ieeexplore.ieee.org/document/9382902'],
        ['Code', 'https://github.com/syz825211943/Multi-Style-Photo-Cartoonization'],
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
        ['TPAMI 2020', 'https://ieeexplore.ieee.org/document/9069416'],
        ['Code', 'https://github.com/yiranran/APDrawingGAN2'],
    ],
    award_name=null,
);


// Authors.


render_author('Ceyuan Yang', 'https://ceyuan.me/');
render_author('Changsong Lei');
render_author('Deli Zhao', 'https://zhaodeli.github.io/');
render_author('Fan Cheng', 'https://www.cs.sjtu.edu.cn/~chengfan/');
render_author('Guoxin Zhang');
render_author('Jia Pan', 'https://www.cs.hku.hk/people/academic-staff/jpan');
render_author('Jiapeng Zhu', 'https://scholar.google.com.sg/citations?user=-ACBm-gAAAAJ');
render_author('Juyong Zhang', 'http://staff.ustc.edu.cn/~juyong/');
render_author('Kecheng Zheng', 'https://zkcys001.github.io/');
render_author('Lianghua Huang', 'https://scholar.google.ch/citations?user=JYVCn3AAAAAJ');
render_author('Long Zeng', 'https://www.sigs.tsinghua.edu.cn/cl_en/main.htm');
render_author('Mengfei Xia');
render_author('Minjing Yu', 'https://scholar.google.com.hk/citations?user=Jq71vN8AAAAJ');
render_author('Paul L. Rosin', 'https://users.cs.cf.ac.uk/Paul.Rosin/');
render_author('Pengfei Wan', 'https://scholar.google.com/citations?user=P6MraaYAAAAJ');
render_author('Qiang Li', 'https://sites.google.com/site/utsqiangli2/');
render_author('Ran Yi', 'https://yiranran.github.io/');
render_author('Shaofeng Wang');
render_author('Teng Hu', 'https://sjtuplayer.github.io/');
render_author('Wang Zhao', 'https://scholar.google.com/citations?user=oKqr-ZQAAAAJ');
render_author('Wenping Wang', 'https://scholar.google.com/citations?user=28shvv0AAAAJ');
render_author('Xuwei Huang');
render_author('Yanan Sun');
render_author('Yang Chen', 'https://scholar.google.com.hk/citations?user=IOZERCcAAAAJ');
render_author('Yaqian Liang', 'https://scholar.google.com.hk/citations?user=aTXDaREAAAAJ');
render_author('Yezhi Shu', 'https://scholar.google.com/citations?user=ItEyqMAAAAAJ');
render_author('Yifei Zhang', 'https://scholar.google.com/citations?user=rQKkIykAAAAJ');
render_author('Yiheng Han', 'https://ieeexplore.ieee.org/author/37086529078');
render_author('Yizhe Tang');
render_author('Yong-Jin Liu', 'https://cg.cs.tsinghua.edu.cn/people/~Yongjin/Yongjin.htm');
render_author('Yu Liu', 'https://scholar.google.com/citations?user=8zksQb4AAAAJ');
render_author('Yu Zhou', 'https://scholar.google.com/citations?user=pMXjhxkAAAAJ');
render_author('Yuji Wang');
render_author('Yujun Shen', 'https://shenyujun.github.io/');
render_author('Yu-Hui Wen', 'https://scholar.google.com/citations?user=bsW8y9YAAAAJ');
render_author('Yu-Kun Lai', 'https://users.cs.cf.ac.uk/Yukun.Lai/');
render_author('Zhongyuan Wang', 'https://scholar.google.com/citations?user=4XVJrRAAAAAJ');
render_author('Zipeng Ye', 'https://qq775193759.github.io/');

