<script setup>
import { reactive, ref, onMounted } from 'vue'

var edit = ref(0)
var editable = ref(0)
var content = reactive([])

function toggleEdit() {
    edit.value = !edit.value
    if (!edit.value) {
        localStorage.setItem('vuejs_showcase_content', JSON.stringify(content))
    }
}

function resetEdit() {
    localStorage.removeItem('vuejs_showcase_content')
    location.reload()
}

onMounted(() => {
    if (!localStorage.getItem('vuejs_showcase_content')) {
        content.push(
            { id: 1, header: 'About Me', content: 'Hi! Eager to learn something new and challenging. Looking forward to develop more projects using current technology.' },
            { id: 2, header: 'Works & Experience', content: 'As software engineer for almost 2 years. Have excellent programming skills.' },
            { id: 3, header: 'Education', content: 'Have background in Computer Science and Information Technology and graduated from university in Malaysia.' },
            { id: 4, header: 'Awards & Achievements', content: '', list: [{ url: '', desc: 'AWS - Cloud Practitioner Certificate' }, { url: '', desc: 'UiTM - iiDex' }, { url: '', desc: 'ANC' }] },
            { id: 5, header: 'Contact Me', content: 'For any inquires or opportunities, please don\'t hesitate to leave me an email.', list: ['faizzainal97@gmail.com', 'Selangor, Malaysia', 'Faizzuddin', 'github.com/FaizzuddinZainal'] }
        )
        localStorage.setItem('vuejs_showcase_content', JSON.stringify(content))
    }
    else {
        const items = JSON.parse(localStorage.getItem('vuejs_showcase_content'))
        for (var bil in items) {
            content.push(items[bil])
        }
    }
    if (localStorage.getItem('vuejs_showcase_isadminlogin')) {
        editable.value = !editable.value
    }
})

</script>
<template>
    <div v-if="editable" class="text-center">
        <button @click="toggleEdit" class="btn btn-danger btn-lg m-3"><i
                :class="edit ? 'fa fa-save' : 'fa fa-pencil'"></i>
            {{ edit ? 'Save' : 'Edit' }}
            this page</button>
        <button v-if="edit" @click="resetEdit" class="btn btn-danger btn-lg m-3"><i class="fa fa-refresh"></i>
            Reset to default</button>
    </div>
    <div v-if="content.length > 0">
        <div class="container py-3">
            <div class="p-5 mb-4 bg-light rounded-3">
                <div class="container-fluid">
                    <h1 v-if="edit"><input type="text" v-model="content[0].header" class="form-control" /></h1>
                    <h1 v-else class="display-5 fw-bold">{{ content[0].header }}</h1>
                    <textarea v-if="edit" class="form-control"
                        v-model="content[0].content">{{ content[0].content }}</textarea>
                    <p v-else class="col-md-8 fs-4">{{ content[0].content }}</p>
                </div>
            </div>
            <div class="row align-items-md-stretch">
                <div class="col-md-6">
                    <div class="h-100 p-5 text-white bg-dark rounded-3">
                        <h2 v-if="edit"><input type="text" v-model="content[1].header" class="form-control" /></h2>
                        <h2 v-else>{{ content[1].header }}</h2>
                        <textarea v-if="edit" class="form-control"
                            v-model="content[1].content">{{ content[1].content }}</textarea>
                        <p v-else>{{ content[1].content }}</p>
                        <br>
                        <a class="btn btn-outline-light" type="button" href="/project">Check More</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="h-100 p-5 bg-light border rounded-3">
                        <h2 v-if="edit"><input type="text" v-model="content[2].header" class="form-control" /></h2>
                        <h2 v-else>{{ content[2].header }}</h2>
                        <textarea v-if="edit" class="form-control"
                            v-model="content[2].content">{{ content[2].content }}</textarea>
                        <p v-else>{{ content[2].content }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid text-center">
            <div class="p-5 mb-4 bg-light rounded-3">
                <h1 class="fw-bold">Awards & Achievements</h1>
                <i class="fa fa-file p-3"><br>AWS - Cloud Practitioner Certificate</i>
                <i class="fa fa-file p-3"><br>UiTM - iiDex</i>
                <i class="fa fa-file p-3"><br>ANC</i>
            </div>
        </div>
        <div class="container p-5">
            <div class="row">
                <div class="col-lg-6">
                    <h2 v-if="edit"><input type="text" v-model="content[4].header" class="form-control" /></h2>
                    <h2 v-else>{{ content[4].header }}</h2>
                    <textarea v-if="edit" class="form-control"
                        v-model="content[4].content">{{ content[4].content }}</textarea>
                    <p v-else class="text-muted pe-5">{{ content[4].content }}</p>
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-1">
                            <i class="fa fa-envelope"></i>
                        </div>
                        <div class="col">
                            <p v-if="edit"><input type="text" v-model="content[4].list[0]" class="form-control" /></p>
                            <p v-else>{{ content[4].list[0] }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1">
                            <i class="fa fa-map-marker"></i>
                        </div>
                        <div class="col">
                            <p v-if="edit"><input type="text" v-model="content[4].list[1]" class="form-control" /></p>
                            <p v-else>{{ content[4].list[1] }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1">
                            <i class="fa fa-linkedin"></i>
                        </div>
                        <div class="col">
                            <p v-if="edit"><input type="text" v-model="content[4].list[2]" class="form-control" /></p>
                            <p v-else>{{ content[4].list[2] }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1">
                            <i class="fa fa-github"></i>
                        </div>
                        <div class="col">
                            <p v-if="edit"><input type="text" v-model="content[4].list[3]" class="form-control" /></p>
                            <p v-else>{{ content[4].list[3] }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>