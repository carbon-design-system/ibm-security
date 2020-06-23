# Testing

## How to test

Follow the [Guiding Principles of React Testing Library](https://github.com/testing-library/react-testing-library#guiding-principles) when writing tests.

## What to test

### Accessibility

Automated accessibility tests are required for significant component variations and should use existing `toHaveNoAxeViolations()` and `toHaveNoDAPViolations()` Jest matchers.

Use this structure for automated accessibility tests:

```jsx
test('should have no Axe or DAP violations', async () => {
  const { container } = render(<Component />);

  await expect(container).toHaveNoAxeViolations();
  await expect(container).toHaveNoDAPViolations('ComponentName');
});

test('should have no Axe or DAP violations with component variation', async () => {
  const { container } = render(<Component variationProp={value} />);

  await expect(container).toHaveNoAxeViolations();
  await expect(container).toHaveNoDAPViolations('ComponentName with variation');
});

test('should have no Axe or DAP violations with component variation that should be wrapped in a landmark node', async () => {
  // `renderWithinLandmark` can be used to wrap a component in a `main` node:
  const { container } = renderWithinLandmark(<Component />);

  await expect(container).toHaveNoAxeViolations();
  await expect(container).toHaveNoDAPViolations('ComponentName');
});
```

#### Test structure

- Each significant variation of a component should have its own test block.
- Use an **asynchronous** test block, and **await** each accessibility rule matcher.

#### DAP requirements

- DAP requires that components be rendered inside a valid landmark element. Use the `renderWithinLandmark` helper to wrap a component in a landmark `main` node.
- DAP requires a unique id per test within a given component. (Hence, "ComponentName" and "ComponentName with variation")

## User events

### Click and key press events

Events (`onClick`, `onKeyPress`, etc) that are important to component functionality should be tested using mocks.

```jsx
test('should invoke close mock when close button is clicked', () => {
  const onCloseMock = jest.fn();
  const { getByLabelText } = render(
    <Component labelText="test close" onClick={onCloseMock} />
  );

  userEvent.click(getByLabelText(/test close/i));
  expect(onCloseMock).toHaveBeenCalledTimes(1);
});
```

### Tabbing

Write a series of tab cycle tests in order to verify that a user can tab through the interactive pieces of the component in a predictable way. Tab cycle tests are very useful for finding hidden "focus traps".

Each tab cycle test should traverse completely through the ideal tab order, in a loop that begins and ends with the first interactive element that receives focus.

Similar to accessibility tests, a tab cycle test should be written for each significant component variation, especially if a variation adds or removes interactive elements from the component.

Example of a tab cycle test for `PanelV2`:

```jsx
test('should cycle panel elements in tab order', () => {
  const { getByLabelText, getByText } = render(
    <PanelV2
      closeButton={{
        label: 'test close',
      }}
      renderFooter={() => <Button>test footer button</Button>}
    >
      <PanelContent>
        test content text
        <Button>test content button</Button>
      </PanelContent>
    </PanelV2>
  );

  userEvent.tab();

  // The close button:
  expect(getByLabelText(/test close/i)).toHaveFocus();

  userEvent.tab();

  // The button inside the `PanelContent` wrapper:
  expect(getByText(/test content button/i)).toHaveFocus();

  userEvent.tab();

  // The footer button:
  expect(getByText(/test footer button/i)).toHaveFocus();

  userEvent.tab();

  // Loop complete.
  // The close button:
  expect(getByLabelText(/test close/i)).toHaveFocus();
});
```

If the component is a single interactive element, like a single `<a>` or `<button>` then a tab cycle test may not be necessary. The `TrendingCard` is an example of a component that does not require a tab cycle test.

## Props

### Custom class names

Ensure that custom class names are checked:

```jsx
test('should add custom class', () => {
  const { getByText } = render(
    <ExternalLink href="https://www.ibm.com/security" className="custom-class">
      test link
    </ExternalLink>
  );
  expect(getByText(/test link/i).closest('a')).toHaveClass('custom-class');
});
```

### Spread attribute

If a component includes a spread attribute (i.e., `...other` in the props definition), include a test to check that extra props can be passed through to the component.

You can use a testing attribute like `data-testid` to test for this:

```jsx
test('should pass through extra props via spread attribute', () => {
  const { queryByTestId } = render(
    <ExternalLink href="https://www.ibm.com/security" data-testid="test-id">
      test link
    </ExternalLink>
  );
  expect(queryByTestId('test-id')).toBeInTheDocument();
});
```

### Object or array of significant values

If an object or array has significant values, then those values should be tested individually. "Significant values" in this case means any values that render completely different nodes, or that individually could cause an error.

For example, with the `ICA`'s `locale` prop, it makes sense to verify that each possible `locale` value does not throw an error:

```jsx
// Note: Locales is an array of values.
Locales.forEach(locale =>
  test(`should accept '${locale}' locale`, () => {
    const { container } = render(
      <ICA label="test ICA" value={10} locale={locale} />
    );
    expect(() => container).not.toThrow();
  })
);
```

And in another example for the `StatusIcon`'s `status` prop, it makes sense to run an accessibility test on each type of `status` because each `status` renders completely different Nodes:

```jsx
// Note: STATUS is an array of values.
STATUS.forEach(status =>
  test(`should have no Axe or DAP violations when \`status\` is  '${status}'`, async () => {
    const main = document.createElement('main');
    render(<StatusIcon status={status} message="test message" />, {
      // DAP requires a landmark '<main>' in the DOM:
      container: document.body.appendChild(main),
    });
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations(
      `StatusIcon with ${status} status`
    );
  })
);
```
