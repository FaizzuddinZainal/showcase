<script setup>
import { onMounted, reactive } from 'vue'

const projectList = reactive(
    [
        {
            id: 1,
            name: 'Portfolio Website',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla metus, tristique eget nisi in, rutrum posuere lorem. Donec vitae ultricies odio. Morbi rhoncus lorem id lacus laoreet, ac mollis nibh placerat. Nunc placerat ullamcorper enim, vitae lobortis sem dictum congue. Integer malesuada posuere ligula eget tempor. Quisque sodales tincidunt mi, sit amet mattis quam posuere sit amet. Nulla a arcu nec metus accumsan congue consectetur quis leo. Duis sodales, ex non tristique ornare, sem odio auctor lacus, nec eleifend leo nunc nec tellus. Praesent malesuada mauris tortor, auctor lobortis massa pharetra vitae. Vivamus viverra laoreet sem id ultricies. Sed feugiat volutpat felis eget imperdiet. Nulla facilisi.',
            image: '/',
            url: '/',
            git: '/',
            tag: ['VueJs', 'Bootstrap', 'Web'],
            platform: 'web'
        },
        {
            id: 2,
            name: 'E-Commerce Website',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla metus, tristique eget nisi in, rutrum posuere lorem. Donec vitae ultricies odio. Morbi rhoncus lorem id lacus laoreet, ac mollis nibh placerat. Nunc placerat ullamcorper enim, vitae lobortis sem dictum congue. Integer malesuada posuere ligula eget tempor. Quisque sodales tincidunt mi, sit amet mattis quam posuere sit amet. Nulla a arcu nec metus accumsan congue consectetur quis leo. Duis sodales, ex non tristique ornare, sem odio auctor lacus, nec eleifend leo nunc nec tellus. Praesent malesuada mauris tortor, auctor lobortis massa pharetra vitae. Vivamus viverra laoreet sem id ultricies. Sed feugiat volutpat felis eget imperdiet. Nulla facilisi.',
            image: '/',
            url: '/',
            git: '/',
            tag: ['React', 'Express', 'NodeJs', 'Material-UI', 'MySQL', 'FPX', 'Web'],
            platform: 'web'
        },
        // {
        //     id: 3,
        //     name: 'Social Chat Application',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla metus, tristique eget nisi in, rutrum posuere lorem. Donec vitae ultricies odio. Morbi rhoncus lorem id lacus laoreet, ac mollis nibh placerat. Nunc placerat ullamcorper enim, vitae lobortis sem dictum congue. Integer malesuada posuere ligula eget tempor. Quisque sodales tincidunt mi, sit amet mattis quam posuere sit amet. Nulla a arcu nec metus accumsan congue consectetur quis leo. Duis sodales, ex non tristique ornare, sem odio auctor lacus, nec eleifend leo nunc nec tellus. Praesent malesuada mauris tortor, auctor lobortis massa pharetra vitae. Vivamus viverra laoreet sem id ultricies. Sed feugiat volutpat felis eget imperdiet. Nulla facilisi.',
        //     image: '/',
        //     url: '/',
        //     git: '/',
        //     tag: ['React', 'Express', 'NodeJs', 'Material-UI', 'MySQL'],
        //     platform: 'web'
        // },
        {
            id: 4,
            name: 'Human Resource Information System (HRIS)',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla metus, tristique eget nisi in, rutrum posuere lorem. Donec vitae ultricies odio. Morbi rhoncus lorem id lacus laoreet, ac mollis nibh placerat. Nunc placerat ullamcorper enim, vitae lobortis sem dictum congue. Integer malesuada posuere ligula eget tempor. Quisque sodales tincidunt mi, sit amet mattis quam posuere sit amet. Nulla a arcu nec metus accumsan congue consectetur quis leo. Duis sodales, ex non tristique ornare, sem odio auctor lacus, nec eleifend leo nunc nec tellus. Praesent malesuada mauris tortor, auctor lobortis massa pharetra vitae. Vivamus viverra laoreet sem id ultricies. Sed feugiat volutpat felis eget imperdiet. Nulla facilisi.',
            image: '/',
            url: '/',
            git: '/',
            tag: ['Laravel', 'Bootstrap', 'JQuery', 'MySQL', 'Web'],
            platform: 'web'
        },
        {
            id: 5,
            name: 'Online Booking System',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla metus, tristique eget nisi in, rutrum posuere lorem. Donec vitae ultricies odio. Morbi rhoncus lorem id lacus laoreet, ac mollis nibh placerat. Nunc placerat ullamcorper enim, vitae lobortis sem dictum congue. Integer malesuada posuere ligula eget tempor. Quisque sodales tincidunt mi, sit amet mattis quam posuere sit amet. Nulla a arcu nec metus accumsan congue consectetur quis leo. Duis sodales, ex non tristique ornare, sem odio auctor lacus, nec eleifend leo nunc nec tellus. Praesent malesuada mauris tortor, auctor lobortis massa pharetra vitae. Vivamus viverra laoreet sem id ultricies. Sed feugiat volutpat felis eget imperdiet. Nulla facilisi.',
            image: '/',
            url: '/',
            git: '/',
            tag: ['Angular', 'Express', 'NodeJs', 'Bootstrap', 'MySQL', 'SenangPay', 'Bilplz', 'Web'],
            platform: 'web'
        },
        {
            id: 6,
            name: 'Miscellaneous Website',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla metus, tristique eget nisi in, rutrum posuere lorem. Donec vitae ultricies odio. Morbi rhoncus lorem id lacus laoreet, ac mollis nibh placerat. Nunc placerat ullamcorper enim, vitae lobortis sem dictum congue. Integer malesuada posuere ligula eget tempor. Quisque sodales tincidunt mi, sit amet mattis quam posuere sit amet. Nulla a arcu nec metus accumsan congue consectetur quis leo. Duis sodales, ex non tristique ornare, sem odio auctor lacus, nec eleifend leo nunc nec tellus. Praesent malesuada mauris tortor, auctor lobortis massa pharetra vitae. Vivamus viverra laoreet sem id ultricies. Sed feugiat volutpat felis eget imperdiet. Nulla facilisi.',
            image: '/',
            url: '/',
            git: '/',
            tag: ['Laravel', 'Bootstrap', 'JQuery', 'Web'],
            platform: 'web'
        },
        {
            id: 7,
            name: 'Point of Sale (POS)',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla metus, tristique eget nisi in, rutrum posuere lorem. Donec vitae ultricies odio. Morbi rhoncus lorem id lacus laoreet, ac mollis nibh placerat. Nunc placerat ullamcorper enim, vitae lobortis sem dictum congue. Integer malesuada posuere ligula eget tempor. Quisque sodales tincidunt mi, sit amet mattis quam posuere sit amet. Nulla a arcu nec metus accumsan congue consectetur quis leo. Duis sodales, ex non tristique ornare, sem odio auctor lacus, nec eleifend leo nunc nec tellus. Praesent malesuada mauris tortor, auctor lobortis massa pharetra vitae. Vivamus viverra laoreet sem id ultricies. Sed feugiat volutpat felis eget imperdiet. Nulla facilisi.',
            image: '/',
            url: '/',
            git: '/',
            tag: ['C#', 'Windows', 'Desktop'],
            platform: 'desktop'
        },
        {
            id: 8,
            name: 'Object Detection Camera Surveillance',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla metus, tristique eget nisi in, rutrum posuere lorem. Donec vitae ultricies odio. Morbi rhoncus lorem id lacus laoreet, ac mollis nibh placerat. Nunc placerat ullamcorper enim, vitae lobortis sem dictum congue. Integer malesuada posuere ligula eget tempor. Quisque sodales tincidunt mi, sit amet mattis quam posuere sit amet. Nulla a arcu nec metus accumsan congue consectetur quis leo. Duis sodales, ex non tristique ornare, sem odio auctor lacus, nec eleifend leo nunc nec tellus. Praesent malesuada mauris tortor, auctor lobortis massa pharetra vitae. Vivamus viverra laoreet sem id ultricies. Sed feugiat volutpat felis eget imperdiet. Nulla facilisi.',
            image: '/',
            url: '/',
            git: '/',
            tag: ['Python', 'TensorflowJS', 'MongoDB', 'Express', 'React', 'NodeJS', 'Web'],
            platform: 'web'
        },
        {
            id: 9,
            name: 'QR & Barcode Reader',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla metus, tristique eget nisi in, rutrum posuere lorem. Donec vitae ultricies odio. Morbi rhoncus lorem id lacus laoreet, ac mollis nibh placerat. Nunc placerat ullamcorper enim, vitae lobortis sem dictum congue. Integer malesuada posuere ligula eget tempor. Quisque sodales tincidunt mi, sit amet mattis quam posuere sit amet. Nulla a arcu nec metus accumsan congue consectetur quis leo. Duis sodales, ex non tristique ornare, sem odio auctor lacus, nec eleifend leo nunc nec tellus. Praesent malesuada mauris tortor, auctor lobortis massa pharetra vitae. Vivamus viverra laoreet sem id ultricies. Sed feugiat volutpat felis eget imperdiet. Nulla facilisi.',
            image: '/',
            url: '/',
            git: '/',
            tag: ['Ionic', 'GoogleAds', 'GooglePay', 'Mobile'],
            platform: 'mobile',
            apk: '/'
        },
        {
            id: 10,
            name: 'Waktu Solat Muslim',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla metus, tristique eget nisi in, rutrum posuere lorem. Donec vitae ultricies odio. Morbi rhoncus lorem id lacus laoreet, ac mollis nibh placerat. Nunc placerat ullamcorper enim, vitae lobortis sem dictum congue. Integer malesuada posuere ligula eget tempor. Quisque sodales tincidunt mi, sit amet mattis quam posuere sit amet. Nulla a arcu nec metus accumsan congue consectetur quis leo. Duis sodales, ex non tristique ornare, sem odio auctor lacus, nec eleifend leo nunc nec tellus. Praesent malesuada mauris tortor, auctor lobortis massa pharetra vitae. Vivamus viverra laoreet sem id ultricies. Sed feugiat volutpat felis eget imperdiet. Nulla facilisi.',
            image: '/',
            url: '/',
            git: '/',
            tag: ['Flutter', 'Affiliate', 'Mobile'],
            platform: 'mobile',
            apk: '/'
        },
        {
            id: 11,
            name: 'Run Tracker',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla metus, tristique eget nisi in, rutrum posuere lorem. Donec vitae ultricies odio. Morbi rhoncus lorem id lacus laoreet, ac mollis nibh placerat. Nunc placerat ullamcorper enim, vitae lobortis sem dictum congue. Integer malesuada posuere ligula eget tempor. Quisque sodales tincidunt mi, sit amet mattis quam posuere sit amet. Nulla a arcu nec metus accumsan congue consectetur quis leo. Duis sodales, ex non tristique ornare, sem odio auctor lacus, nec eleifend leo nunc nec tellus. Praesent malesuada mauris tortor, auctor lobortis massa pharetra vitae. Vivamus viverra laoreet sem id ultricies. Sed feugiat volutpat felis eget imperdiet. Nulla facilisi.',
            image: '/',
            url: '/',
            git: '/',
            tag: ['Android Studio', 'Java', 'XML', 'Firebase', 'Mapbox', 'Mobile'],
            platform: 'mobile',
            apk: '/'
        },
        {
            id: 12,
            name: 'Staff Attendance',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla metus, tristique eget nisi in, rutrum posuere lorem. Donec vitae ultricies odio. Morbi rhoncus lorem id lacus laoreet, ac mollis nibh placerat. Nunc placerat ullamcorper enim, vitae lobortis sem dictum congue. Integer malesuada posuere ligula eget tempor. Quisque sodales tincidunt mi, sit amet mattis quam posuere sit amet. Nulla a arcu nec metus accumsan congue consectetur quis leo. Duis sodales, ex non tristique ornare, sem odio auctor lacus, nec eleifend leo nunc nec tellus. Praesent malesuada mauris tortor, auctor lobortis massa pharetra vitae. Vivamus viverra laoreet sem id ultricies. Sed feugiat volutpat felis eget imperdiet. Nulla facilisi.',
            image: '/',
            url: '/',
            git: '/',
            tag: ['Flutter', 'Mobile'],
            platform: 'mobile',
            apk: '/'
        },
    ]
)

const filterOption = reactive([
    { name: 'VueJs', state: 0 },
    { name: 'Bootstrap', state: 0 },
    { name: 'Material-UI', state: 0 },
    { name: 'NodeJs', state: 0 },
    { name: 'React', state: 0 },
    { name: 'Laravel', state: 0 },
    { name: 'C#', state: 0 },
    { name: 'MySQL', state: 0 },
    { name: 'Python', state: 0 },
    { name: 'Mobile', state: 0 },
    { name: 'Web', state: 0 },
    { name: 'Desktop', state: 0 }])

const filterProjectList = reactive(projectList)

function addToFilter(index) {
    this.filterOption[index].state = !this.filterOption[index].state

    if (this.filterOption.every(val => val.state == 0)) {
        this.filterProjectList = this.projectList
    }
    else {
        this.filterProjectList = this.projectList.filter(obj => {
            return this.filterOption.some(val => val.state ? obj.tag.includes(val.name) : 0)
        })
    }
}
</script>

<template>
    <div class="container py-5">
        <div>
            <h5><span style="cursor: pointer" v-for="(item, index) of filterOption"
                    class="border badge mb-2 ms-2 p-3 p-lg-2" :class="item.state ? 'text-bg-primary' : 'text-bg-light'"
                    @click="addToFilter(index)">{{
                            item.name
                    }}</span>
            </h5>
        </div>
        <div class="row gx-5">
            <div class="col-lg-6 mb-5" v-for="item of filterProjectList">
                <div class="card shadow">
                    <svg class="bd-placeholder-img card-img-top d-none d-lg-block d-sm-none" width="100%" height="180"
                        xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap"
                        preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                            dy=".3em">Image cap</text>
                    </svg>
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <p class="text-muted">{{ item.description }}</p>
                        <div>
                            <span class="border badge text-bg-light mb-3" v-for="tag of item.tag">{{ tag }}</span>
                        </div>
                        <div class="float-end hstack gap-2">
                            <span v-if="item.apk"><a :href="item.apk" class="btn btn-primary">Download APK</a></span>
                            <span v-else="item.apk"><a :href="item.url" class="btn btn-primary">Demo</a></span>
                            <a :href="item.git" class="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>