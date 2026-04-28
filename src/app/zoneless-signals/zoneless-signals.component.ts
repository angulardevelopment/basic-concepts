import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, EffectRef, inject, Injector, Input, linkedSignal, Signal, signal, WritableSignal } from '@angular/core';
import { effect } from '@angular/core';
import { prettyPrintJson } from 'pretty-print-json';

@Component({
  selector: 'app-zoneless-signals',
  imports: [JsonPipe],
  templateUrl: './zoneless-signals.component.html',
  styleUrl: './zoneless-signals.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZonelessSignalsComponent {
  CountSignal = signal<number>(0);
  constructor(private http: HttpClient) {

    // Automatically log the data whenever it changes (using effect)
    effect(() => {
      console.log('User data changed:', this.data());
      console.log('Count changed:', this.count());
    });
    this.countEffectRef = effect(() => {
      console.log('effect called for CountSignal ', this.CountSignal());
    })
    this.productEffect = effect(() => {
      console.log('productEffect called', this.ProductSignal());
    })

  }
  public ChangeDetectionCount = 0
  public get GetChangeDetectionCount() {
    return this.ChangeDetectionCount++
  }
  private injector = inject(Injector);

  log() {
    effect(() => {
      console.log('effect called for CountSignal ', this.CountSignal());
    }, { injector: this.injector });
  }
  count = signal(10);  // reactive signal

  increment() {
    this.count.update(c => c + 1);
  }

  username = signal('sunny7899');  // Using signal for input value
  data = signal<any>(null);  // Signal for async data
  html = '';
  userStatus = computed(() => {
    return this.data() ? 'Data loaded' : 'No data';
  });
  newCount: WritableSignal<number> = signal(0);
  newCount$ = this.newCount.asReadonly();
  updateCount() {
    this.count.update((current) => current + 1);
  }
  setCount() {
    this.count.set(5);
  }

  private userSignal: WritableSignal<any> = signal({
    id: 1,
    name: 'demo',
    profile: {
      email: 'test',
      mode: ['light-mode', 'notifications']
    }
  });
  updateUser() {
    //  this.user = { ...this.user(), name: 'test' }; // TypeScript error
    //  this.user().name = 'test'; // correct way

  }
  a = signal(6);

  isEven: Signal<boolean> = computed(() => {
    console.log('isEven computed called');
    // this.a.set(99)
    if (this.count() % 2 == 0) {
      return true;
    }
    else {
      return false;
    }
  })
  bookData: IBook[] = [
    {
      Id: 1,
      Title: 'Angular Essentials',
    },
    {
      Id: 2,
      Title: 'React Masterclass',
    },
  ];
  books: WritableSignal<IBook[]> = signal<IBook[]>(this.bookData);

  //  selectedBook = linkedSignal({
  //  source: this.books,
  //  computation: (a) => {
  //  console.log('hello');
  //  return a[0];
  //  },
  //  });
  // shorthand syntax for linkedSignal
  selectedBook = linkedSignal(() => this.books()[0]);

  updateSelectedBook() {
    this.selectedBook.set({
      Id: 1,
      Title: 'You Do not know JavaScript',
    });
  }

  changeBook() {
    this.bookData = [
      {
        Id: 1,
        Title: '.NET',
      },
      {
        Id: 2,
        Title: 'Java',
      },
      {
        Id: 3,
        Title: 'Angular Essentials',
      },
    ];
    this.books.set(this.bookData);
  }

  countEffectRef: EffectRef;
  productEffect: EffectRef;

  ngOnDestroy() {
    if (this.countEffectRef) {
      this.countEffectRef.destroy();
    }
    if (this.productEffect) {
      this.productEffect.destroy();
    }
  }

  product: IProduct = {
    id: 1,
    name: 'Laptop',
    price: 50000,
    description: 'A high performance laptop'
  }
  //  ProductSignal = signal<IProduct>(this.product)
  ProductSignal = signal<IProduct>(this.product, {
    equal:
      productSignalIdEqualityFunction
  });
  setProduct() {
    let p: IProduct =
    {
      id: 2,
      name: 'Laptop',
      price: 5000,
      description: 'A high performance laptop'
    };
    this.ProductSignal.set(p);
  }

  fetchData() {
    // Manually update the signals
    this.http.get(`https://api.github.com/users/${this.username()}`)
      .subscribe((response) => {
        this.data.set(response);  // Set new data
        const elem = document.getElementById('account');
        elem!.innerHTML = prettyPrintJson.toHtml(this.data());
      });
  }
}

export interface IBook {
  Id: number;
  Title: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description?: string;
}

function ProductSignalEqualityFunction(previous: IProduct, current: IProduct): boolean {
  console.log("previous value", previous);
  console.log("current value", current);
  if (JSON.stringify(previous) === JSON.stringify(current)) {
    return true;
  }
  return false;
}

// should only update when id is different
function productSignalIdEqualityFunction(previous: IProduct, current: IProduct): boolean {
  return previous.id === current.id;
}