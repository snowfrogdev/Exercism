use std::iter::FromIterator;

#[derive(Debug)]
pub struct SimpleLinkedList<T> {
    head: Option<Box<Node<T>>>,
}

impl<T: std::fmt::Debug> SimpleLinkedList<T> {
    pub fn new() -> Self {
        Self { head: None }
    }

    pub fn is_empty(&self) -> bool {
        self.head.is_none()
    }

    pub fn len(&self) -> usize {
        let mut count = 0;
        let mut tail = &self.head;
        while let Some(node) = tail {
            tail = &node.next;
            count += 1;
        }

        count
    }

    pub fn push(&mut self, element: T) {
        self.head = Some(Box::new(Node {
            data: element,
            next: self.head.take(),
        }));
    }

    pub fn pop(&mut self) -> Option<T> {
        self.head.as_ref()?;

        let mut node = self.head.take().unwrap();
        self.head = node.next.take();
        Some(node.data)
    }

    pub fn peek(&self) -> Option<&T> {
        match self.head {
            None => None,
            _ => Some(&self.head.as_ref().unwrap().data),
        }
    }

    pub fn rev(self) -> SimpleLinkedList<T> {
        <SimpleLinkedList<T> as Into<Vec<T>>>::into(self)
            .into_iter()
            .rev()
            .collect()
    }
}

impl<T: std::fmt::Debug> FromIterator<T> for SimpleLinkedList<T> {
    fn from_iter<I: IntoIterator<Item = T>>(iter: I) -> Self {
        let mut list = SimpleLinkedList::new();
        for elem in iter {
            list.push(elem);
        }

        list
    }
}

impl<T: std::fmt::Debug> Into<Vec<T>> for SimpleLinkedList<T> {
    fn into(mut self) -> Vec<T> {
        let mut v = vec![];
        while let Some(node) = self.pop().take() {
            v.push(node);
        }
        v.into_iter().rev().collect()
    }
}

#[derive(Debug)]
struct Node<T> {
    data: T,
    next: Option<Box<Node<T>>>,
}
