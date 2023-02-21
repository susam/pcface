"""Tests for graph representation of bitmaps."""

import unittest

import pcface


class GraphTest(unittest.TestCase):
    """Tests for graph representation of bitmaps."""

    # pylint: disable=missing-function-docstring
    def test_graph_width_1(self):
        graph = pcface.make_graph([0], 1, '.@', False)
        self.assertEqual(graph, '.\n')
        graph = pcface.make_graph([1], 1, '.@', False)
        self.assertEqual(graph, '@\n')
        graph = pcface.make_graph([0, 1], 1, '.@', False)
        self.assertEqual(graph, '.\n@\n')

    def test_graph_width_incorrect(self):
        with self.assertRaises(AssertionError):
            pcface.make_graph([0], 0, '.@', False)
        with self.assertRaises(AssertionError):
            pcface.make_graph([2], 1, '.@', False)

    def test_graph_width_2(self):
        graph = pcface.make_graph([0, 1, 2, 3], 2, '.@', False)
        self.assertEqual(graph, '..\n.@\n@.\n@@\n')

    def test_graph_symbols(self):
        graph = pcface.make_graph([0, 1, 2, 3], 2, ' *', False)
        self.assertEqual(graph, '  \n *\n* \n**\n')

    def test_graph_prefix(self):
        graph = pcface.make_graph([0, 1, 2, 3], 2, '.@', True)
        self.assertEqual(graph, '0x0 ..\n0x1 .@\n0x2 @.\n0x3 @@\n')
