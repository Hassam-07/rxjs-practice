# Autocomplete Feature Documentation

## Overview

This documentation provides an overview of the autocomplete feature implemented using Angular and RxJS. The feature includes an input field that interacts with the Wikipedia search API to fetch and display search results in real-time.

## Files

- `app.component.html`: HTML template for the autocomplete component.
- `appp.component.ts`: TypeScript file containing the logic for the autocomplete component.
- `wiki-api-service.service.ts`: Angular service to handle interactions with the Wikipedia search API.

## Autocomplete Component

### HTML Template (`app.component.html`)

```html
<input type="text" [formControl]="searchControl" placeholder="Search" />
<ul>
  <li *ngFor="let result of results$ | async">{{ result }}</li>
</ul>
```

# Autocomplete Feature Explanation

## Introduction

This document explains the RxJS operators used in the implementation of the Autocomplete feature. The Autocomplete feature is designed to provide real-time suggestions as the user types into a search input field. The implementation relies on RxJS to handle asynchronous events and manage the flow of data.

## Operators and Their Role

### `debounceTime(300)`

The `debounceTime` operator is used to introduce a delay of 300 milliseconds between consecutive emissions. The delay ensures that API requests are only triggered after a short pause in typing, reducing unnecessary load on the server.

### `map((value) => value.trim())`

The `map` operator is employed to transform the emitted values. In this case, it trims leading and trailing whitespaces from the user input. Trimming the input ensures that unnecessary spaces don't affect the search results and allows for a more accurate query.

### `distinctUntilChanged()`

The `distinctUntilChanged` operator filters out consecutive duplicate values emitted by the observable. It ensures that the observable only emits distinct, non-repeated values, optimizing the performance of the Autocomplete feature.

### `switchMap((term: string) => this.fetchResults(term))`

The `switchMap` operator is used to handle the switch from one observable (user input) to another (API request observable). It cancels the previous API request observable when a new user input is received. This is beneficial because it ensures that only the results corresponding to the latest user input are considered, preventing out-of-order responses.

## Fetching Results

The `fetchResults` method makes an HTTP request to the Wikipedia search API based on the provided search term. The observable returned by `switchMap` is then mapped to the array of search results obtained from the API response.
