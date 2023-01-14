import { identifierName } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ExampleService } from './example.service';
export interface Font {
    owner: string;
    id: number;
    font: number;
    status: string;
}

@Component({
    selector: 'example',
    templateUrl: './example.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
    public fonts: any = []
    public dataSource: Font[] = []
    displayedColumns: string[] = ['id', 'owner', 'font', 'status', 'actions'];
    public term: string
    /**
     * Constructor
     */
    constructor(private service: ExampleService) {
    }
    ngOnInit(): void {
        this.term = ``
        this.service.list().subscribe(data => {
            console.log(data)
            this.fonts = data;
            this.dataSource = this.fonts.map(item => item = {
                id: item.fields.tipo_fonte.ID,
                owner: item.fields.proprietario.display_name,
                font: item.fields.tipo_fonte.post_title,
                status: item.fields.status
            })
            console.log(this.dataSource)

        })
    }

    setTerm(event) {
        this.term = (event.target as HTMLInputElement).value;
        this.search()
    }
    search() {
        if (this.term.length == 0) {
            this.dataSource = this.fonts.map(item => item = {
                id: item.fields.tipo_fonte.ID,
                owner: item.fields.proprietario.display_name,
                font: item.fields.tipo_fonte.post_title,
                status: item.fields.status
            })
        }
        this.dataSource = this.fonts.map(item => item = {
            id: item.fields.tipo_fonte.ID,
            owner: item.fields.proprietario.display_name,
            font: item.fields.tipo_fonte.post_title,
            status: item.fields.status
        }).filter(item =>
            String(item.id).includes(this.term) ||
            item.owner.includes(this.term) ||
            item.font.includes(this.term) ||
            item.status.includes(this.term))
    }
}
